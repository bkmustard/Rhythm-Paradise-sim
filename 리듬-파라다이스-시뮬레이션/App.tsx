
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Character, GameState, EncounterResponse } from './types';
import { CHARACTERS, INITIAL_RULES, LOCAL_ENCOUNTERS } from './constants';

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentEncounter, setCurrentEncounter] = useState<EncounterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 카테고리에서 '기타' 제거
  const categories = ['전체', '어트랙션', '보안부', '본부', '식당', '의무실', '경찰'];

  const filteredCharacters = selectedCategory === '전체' 
    ? CHARACTERS 
    : CHARACTERS.filter(c => c.category === selectedCategory);

  const startGame = (selectedChar: Character) => {
    setCharacter(selectedChar);
    setGameState({
      currentLocation: '입구',
      sanity: 100,
      inventory: selectedChar.initialInventory,
      rulesRead: INITIAL_RULES,
      status: 'playing',
      logs: [`${selectedChar.name}로서의 근무가 시작되었습니다.`],
      currentRuleSet: INITIAL_RULES
    });
    
    // BGM 재생 시도 (사용자 상호작용 후)
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(e => console.log("Audio play deferred for interaction"));
    }
  };

  const generateLocalEncounter = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * LOCAL_ENCOUNTERS.length);
      const encounter = LOCAL_ENCOUNTERS[randomIndex];
      setCurrentEncounter(encounter);
      setIsLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    if (gameState && !currentEncounter && !isLoading && character && gameState.status === 'playing') {
      generateLocalEncounter();
    }
  }, [gameState, currentEncounter, isLoading, character, generateLocalEncounter]);

  const handleOptionSelect = (option: any) => {
    if (!gameState || !character) return;

    const newSanity = Math.max(0, Math.min(100, gameState.sanity + option.sanityChange));
    const newStatus = newSanity <= 0 ? 'dead' : gameState.status;
    const newInventory = option.itemGain ? [...gameState.inventory, option.itemGain] : gameState.inventory;
    const newRules = option.newRule ? [...gameState.currentRuleSet, option.newRule] : gameState.currentRuleSet;

    setGameState({
      ...gameState,
      sanity: newSanity,
      status: newStatus,
      inventory: newInventory,
      currentRuleSet: newRules,
      logs: [...gameState.logs, option.text],
    });
    setCurrentEncounter(null);
  };

  const resetGame = () => {
    setCharacter(null);
    setGameState(null);
    setCurrentEncounter(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  if (!character) {
    return (
      <div className="min-h-screen bg-[#050505] p-6 selection:bg-red-500/30">
        <audio ref={audioRef} loop src="https://assets.mixkit.co/music/preview/mixkit-horror-ambient-131.mp3" />
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10 py-10 border-b border-red-900/20">
            <h1 className="text-5xl font-black mb-3 myeongjo text-red-600 drop-shadow-[0_0_15px_rgba(185,28,28,0.3)] tracking-tighter uppercase">
              Rhythm Paradise
            </h1>
          </header>

          <div className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-md py-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-md border text-xs font-bold transition-all ${
                    selectedCategory === cat 
                    ? 'bg-red-700 border-red-700 text-white shadow-lg' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredCharacters.map((char) => (
              <div 
                key={char.id}
                onClick={() => startGame(char)}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:border-red-600 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={char.avatar} alt={char.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center space-x-1 mb-1">
                        <span className="px-1.5 py-0.5 bg-red-600 text-[8px] font-black text-white uppercase rounded">
                        {char.difficulty}
                        </span>
                        <span className="text-[9px] text-zinc-500 font-bold uppercase">{char.category}</span>
                    </div>
                    <h3 className="text-lg font-black text-white leading-none mb-1">{char.name}</h3>
                    <p className="text-[10px] text-red-400 font-bold opacity-80">{char.role}</p>
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <p className="text-[10px] text-zinc-400 italic mb-2 line-clamp-2">"{char.quote}"</p>
                  <div className="flex flex-wrap gap-1">
                    {char.keywords.slice(0, 2).map(kw => (
                      <span key={kw} className="text-[8px] px-1 bg-zinc-800 text-zinc-500 rounded border border-zinc-700">#{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] flex flex-col lg:flex-row relative overflow-hidden text-zinc-300">
      <div className="scanline opacity-[0.03]"></div>
      <audio autoPlay loop src="https://assets.mixkit.co/music/preview/mixkit-horror-ambient-131.mp3" />
      
      {/* Sidebar: Status & Inventory */}
      <div className="w-full lg:w-72 bg-zinc-950 border-b lg:border-b-0 lg:border-r border-zinc-900 p-6 z-20 flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <img src={character.avatar} alt={character.name} className="w-14 h-14 rounded-lg object-cover border border-red-900/50 grayscale hover:grayscale-0 transition-all" />
          <div>
            <h2 className="text-base font-black tracking-tighter text-white">{character.name}</h2>
            <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest">{character.role}</p>
            <p className="text-[9px] text-zinc-600">{character.age}Y / {character.gender}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-[9px] font-black mb-1.5 uppercase tracking-widest text-zinc-500">
            <span>Mental Health</span>
            <span className={gameState?.sanity! < 30 ? "text-red-500 flicker animate-pulse" : "text-zinc-400"}>
              {gameState?.sanity}%
            </span>
          </div>
          <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-700 ${gameState?.sanity! < 30 ? 'bg-red-600' : 'bg-zinc-100'}`}
              style={{ width: `${gameState?.sanity}%` }}
            />
          </div>
        </div>

        <div className="flex-1 mb-6 overflow-y-auto">
          <h3 className="text-[9px] font-black text-zinc-600 mb-3 uppercase tracking-[0.3em]">Items</h3>
          <ul className="space-y-2">
            {gameState?.inventory.map((item, idx) => (
              <li key={idx} className="text-[11px] bg-zinc-900/50 border border-zinc-800 px-3 py-2 rounded flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => setShowRules(true)}
          className="w-full py-3 bg-red-900/10 border border-red-900/50 text-red-600 rounded-md hover:bg-red-900 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest"
        >
          Rule Book
        </button>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col p-6 lg:p-12 relative z-10 max-h-screen overflow-y-auto bg-grid-zinc-900/20">
        <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center">
          {isLoading ? (
            <div className="text-center">
              <div className="inline-block w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-xs text-zinc-600 font-mono italic animate-pulse">Observation in progress...</p>
            </div>
          ) : currentEncounter ? (
            <div className="animate-in fade-in duration-500">
              <div className="mb-4 flex items-center space-x-2">
                 <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                 <span className="text-zinc-600 font-mono text-[9px] tracking-widest uppercase">Loc: {gameState?.currentLocation}</span>
              </div>
              
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-lg mb-8 relative">
                <p className="text-base md:text-lg leading-relaxed myeongjo text-zinc-200">
                  {currentEncounter.description}
                </p>
              </div>

              <div className="space-y-3">
                {currentEncounter.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full p-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-900/50 rounded-md text-left transition-all group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-100">{option.text}</span>
                      <span className="text-[9px] text-zinc-700 font-mono">[{idx + 1}]</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 opacity-30">
             <div className="space-y-1">
               {gameState?.logs.slice(-2).reverse().map((log, idx) => (
                 <p key={idx} className="text-[10px] font-mono italic">
                   &gt; {log}
                 </p>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Rules Modal */}
      {showRules && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-900 max-w-xl w-full max-h-[70vh] flex flex-col rounded-lg shadow-2xl">
            <div className="p-5 border-b border-zinc-900 flex justify-between items-center">
              <h2 className="text-lg font-black myeongjo text-red-700 uppercase tracking-tighter">Emergency Manual</h2>
              <button onClick={() => setShowRules(false)} className="text-zinc-600 hover:text-white">✕</button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto">
              {gameState?.currentRuleSet.map((rule, idx) => (
                <div key={idx} className="text-xs leading-relaxed myeongjo text-zinc-400 border-l border-red-900/30 pl-3">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameState?.status === 'dead' && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
          <h1 className="text-5xl font-black myeongjo text-red-900 mb-8 tracking-tighter uppercase flicker">Terminated</h1>
          <p className="text-sm myeongjo text-zinc-600 text-center max-w-xs mb-10 leading-relaxed">
            "{character.name}님의 고유 데이터가 정화되었습니다. 공원의 규칙은 영원할 것입니다."
          </p>
          <button 
            onClick={resetGame}
            className="px-6 py-2 border border-red-900 text-red-900 hover:bg-red-900 hover:text-black transition-all text-xs font-black uppercase"
          >
            Restart Session
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
