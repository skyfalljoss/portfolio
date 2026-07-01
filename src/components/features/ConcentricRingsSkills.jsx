import { useRef, useState, useMemo, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { 
  Code, Terminal, Hash, Database, Layers, Braces, Atom, Server, 
  Wind, Sparkles, Grid, HardDrive, Leaf, GitBranch, Box, Palette, 
  Laptop, Send, Smartphone, CheckSquare, RefreshCw, Compass
} from 'lucide-react';

const skillConfig = {
  Python: { color: '#38BDF8', icon: Code, label: 'Python' },
  "C/C++": { color: '#3B82F6', icon: Terminal, label: 'C/C++' },
  JavaScript: { color: '#F7DF1E', icon: Braces, label: 'JavaScript' },
  TypeScript: { color: '#00D2FF', icon: Code, label: 'TypeScript' },
  SQL: { color: '#00BCD4', icon: Database, label: 'SQL' },
  "HTML/CSS": { color: '#FF5722', icon: Layers, label: 'HTML/CSS' },
  
  React: { color: '#61DAFB', icon: Atom, label: 'React' },
  "Next.js": { color: '#0070F3', icon: Atom, label: 'Next.js' },
  "Node.js": { color: '#39FF14', icon: Server, label: 'Node.js' },
  Django: { color: '#00E676', icon: Server, label: 'Django' },
  Flask: { color: '#FF5722', icon: Wind, label: 'Flask' },
  TailwindCSS: { color: '#06B6D4', icon: Sparkles, label: 'TailwindCSS' },
  SpaCy: { color: '#29B6F6', icon: Code, label: 'SpaCy' },
  "Keras/TensorFlow": { color: '#FF9100', icon: Code, label: 'Keras/TF' },

  PostgreSQL: { color: '#2979FF', icon: Database, label: 'PostgreSQL' },
  MySQL: { color: '#00E5FF', icon: Database, label: 'MySQL' },
  SQLite: { color: '#00B0FF', icon: HardDrive, label: 'SQLite' },
  Prisma: { color: '#38BDF8', icon: Database, label: 'Prisma' },
  SQLAlchemy: { color: '#FF1744', icon: Database, label: 'SQLAlchemy' },

  Git: { color: '#FF3D00', icon: GitBranch, label: 'Git' },
  GitHub: { color: '#A0AEC0', icon: GitBranch, label: 'GitHub' },
  Docker: { color: '#00B0FF', icon: Box, label: 'Docker' },
  Vercel: { color: '#7C3AED', icon: Server, label: 'Vercel' },
  Clerk: { color: '#8C66FF', icon: Hash, label: 'Clerk' },
  Postman: { color: '#FF8C00', icon: Send, label: 'Postman' },
  Jira: { color: '#2979FF', icon: CheckSquare, label: 'Jira' },
  Inngest: { color: '#FF1744', icon: RefreshCw, label: 'Inngest' },
  "OpenAI API": { color: '#A855F7', icon: Sparkles, label: 'OpenAI API' },
};

const getSkillConfig = (name) => {
  return skillConfig[name] || { color: '#fc571b', icon: Code, label: name };
};

const CX = 400;
const CY = 300;

function usePositions(rings) {
  return useMemo(() => {
    const map = {};

    // 1. Languages (Left Outer Branch)
    const languagesRing = rings.find((r) => r.id === 'languages');
    const languages = languagesRing ? languagesRing.skills : [];
    languages.forEach((skill, i) => {
      const alpha = (-50 + i * (100 / Math.max(1, languages.length - 1))) * Math.PI / 180;
      const theta = Math.PI + alpha;
      const radius = 245 + 80 * Math.cos(alpha * 1.5);
      map[skill.name] = {
        x: CX + radius * Math.cos(theta),
        y: CY + radius * Math.sin(theta),
        skill,
        group: 'left-outer',
      };
    });

    // 2. Frameworks (Right Outer Branch)
    const frameworksRing = rings.find((r) => r.id === 'frameworks');
    const frameworks = frameworksRing ? frameworksRing.skills : [];
    frameworks.forEach((skill, i) => {
      const alpha = (-50 + i * (100 / Math.max(1, frameworks.length - 1))) * Math.PI / 180;
      const theta = alpha;
      const radius = 245 + 80 * Math.cos(alpha * 1.5);
      map[skill.name] = {
        x: CX + radius * Math.cos(theta),
        y: CY + radius * Math.sin(theta),
        skill,
        group: 'right-outer',
      };
    });

    // 3. DevOps & Tools (Middle Ring)
    const devopsRing = rings.find((r) => r.id === 'devops');
    const devops = devopsRing ? devopsRing.skills : [];
    const devopsAngles = [155, 185, 215, 125, 65, 35, 5, -25, -55];
    devops.forEach((skill, i) => {
      const angleDeg = devopsAngles[i % devopsAngles.length];
      const theta = angleDeg * Math.PI / 180;
      const radius = 165;
      map[skill.name] = {
        x: CX + radius * Math.cos(theta),
        y: CY + radius * Math.sin(theta),
        skill,
        group: 'middle',
      };
    });

    // 4. Databases (Inner Ring)
    const databasesRing = rings.find((r) => r.id === 'databases');
    const databases = databasesRing ? databasesRing.skills : [];
    const dbAngles = [45, 117, 189, 261, 333];
    databases.forEach((skill, i) => {
      const angleDeg = dbAngles[i % dbAngles.length];
      const theta = angleDeg * Math.PI / 180;
      const radius = 80;
      map[skill.name] = {
        x: CX + radius * Math.cos(theta),
        y: CY + radius * Math.sin(theta),
        skill,
        group: 'inner',
      };
    });

    return map;
  }, [rings]);
}

export default function ConcentricRingsSkills({ rings = [], connections = [] }) {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  const [activeFilter, setActiveFilter] = useState('All');
  
  const positions = usePositions(rings);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handleChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const getSkillRing = (name) => {
    return rings.find(r => r.skills?.some(s => s.name === name))?.id;
  };

  const adjacency = useMemo(() => {
    const map = {};
    connections.forEach(({ from, to }) => {
      if (!map[from]) map[from] = [];
      if (!map[to]) map[to] = [];
      map[from].push(to);
      map[to].push(from);
    });
    return map;
  }, [connections]);

  useGSAP(() => {
    if (!isDesktop) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 82%',
        toggleActions: 'play none none none',
      }
    });

    // 1. Center hub circles grow from center outward, and texts fade in
    tl.fromTo('.center-circle-1', 
      { attr: { r: 0 } },
      { attr: { r: 28 }, duration: 0.6, ease: 'back.out(2)' }
    );

    tl.fromTo('.center-circle-2', 
      { attr: { r: 0 } },
      { attr: { r: 25 }, duration: 0.6, ease: 'back.out(2)' },
      '-=0.5'
    );

    tl.fromTo(['.center-text-1', '.center-text-2'], 
      { opacity: 0, scale: 0 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'back.out(1.5)', 
        svgOrigin: '400 300',
        onComplete: () => {
          gsap.set(['.center-text-1', '.center-text-2'], { clearProps: 'transform,scale,opacity' });
        }
      },
      '-=0.4'
    );

    // 2. Background glow appear
    tl.fromTo('.bg-glow-ring', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.0, ease: 'power3.out' },
      '-=0.8'
    );

    // 3. Guide circles expand outward from the center hub
    tl.fromTo('.guide-circle-inner', 
      { attr: { r: 0 } },
      { attr: { r: 80 }, duration: 0.7, ease: 'power2.out' },
      '-=0.6'
    );

    tl.fromTo('.guide-circle-middle', 
      { attr: { r: 0 } },
      { attr: { r: 165 }, duration: 0.7, ease: 'power2.out' },
      '-=0.5'
    );

    tl.fromTo('.guide-circle-outer', 
      { attr: { r: 0 } },
      { attr: { r: 245 }, duration: 0.7, ease: 'power2.out' },
      '-=0.5'
    );

    tl.fromTo('.branch-ribbon', 
      { strokeDasharray: 400, strokeDashoffset: 400, opacity: 0 },
      { 
        strokeDashoffset: 0, 
        opacity: 0.7, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power2.out',
        onComplete: () => {
          gsap.set('.branch-ribbon', { clearProps: 'strokeDasharray,strokeDashoffset,opacity' });
        }
      },
      '-=0.8'
    );

    // 4. Badges explode outward from the center hub
    tl.fromTo('.desktop-skill-badge', 
      { 
        scale: 0, 
        opacity: 0, 
        x: (i, el) => parseFloat(el.getAttribute('data-dx') || '0'),
        y: (i, el) => parseFloat(el.getAttribute('data-dy') || '0')
      },
      { 
        scale: 1, 
        opacity: 1, 
        x: 0, 
        y: 0, 
        duration: 1.0, 
        stagger: {
          amount: 0.6,
          from: "center"
        }, 
        ease: 'back.out(1.4)',
        onComplete: () => {
          gsap.set('.desktop-skill-badge', { clearProps: 'x,y,scale,opacity' });
        }
      },
      '-=0.6'
    );

    // 5. Spokes and connection lines draw themselves
    tl.fromTo('.spoke-line', 
      { opacity: 0 },
      { 
        opacity: 0.3, 
        duration: 0.8, 
        stagger: 0.01, 
        ease: 'power2.out',
        onComplete: () => {
          gsap.set('.spoke-line', { clearProps: 'opacity' });
        }
      },
      '-=0.4'
    );

    tl.fromTo('.connection-line', 
      { strokeDasharray: 200, strokeDashoffset: 200, opacity: 0 },
      { 
        strokeDashoffset: 0, 
        opacity: 0.25, 
        duration: 0.8, 
        stagger: 0.01, 
        ease: 'power1.out',
        onComplete: () => {
          gsap.set('.connection-line', { clearProps: 'strokeDasharray,strokeDashoffset,opacity' });
        }
      },
      '-=0.6'
    );
  }, { scope: containerRef });

  const getHighlightState = (name) => {
    if (activeFilter !== 'All' && getSkillRing(name) !== activeFilter) return 'dimmed';
    if (!hoveredSkill) return 'normal';
    if (name === hoveredSkill) return 'hovered';
    return adjacency[hoveredSkill]?.includes(name) ? 'connected' : 'dimmed';
  };

  const getLineHighlightState = (conn) => {
    if (activeFilter !== 'All') {
      if (getSkillRing(conn.from) !== activeFilter || getSkillRing(conn.to) !== activeFilter) {
        return 'dimmed';
      }
    }
    if (!hoveredSkill) return 'normal';
    return conn.from === hoveredSkill || conn.to === hoveredSkill ? 'highlighted' : 'dimmed';
  };

  const languagesRing = rings.find((r) => r.id === 'languages');
  const leftSkills = languagesRing ? languagesRing.skills || [] : [];
  
  const frameworksRing = rings.find((r) => r.id === 'frameworks');
  const rightSkills = frameworksRing ? frameworksRing.skills || [] : [];

  const p0 = leftSkills[0] ? positions[leftSkills[0].name] : null;
  const p1 = leftSkills[1] ? positions[leftSkills[1].name] : null;
  const p2 = leftSkills[2] ? positions[leftSkills[2].name] : null;
  const p3 = leftSkills[3] ? positions[leftSkills[3].name] : null;
  const p4 = leftSkills[4] ? positions[leftSkills[4].name] : null;
  const p5 = leftSkills[5] ? positions[leftSkills[5].name] : null;

  const r0 = rightSkills[0] ? positions[rightSkills[0].name] : null;
  const r1 = rightSkills[1] ? positions[rightSkills[1].name] : null;
  const r3 = rightSkills[3] ? positions[rightSkills[3].name] : null;
  const r4 = rightSkills[4] ? positions[rightSkills[4].name] : null;
  const r6 = rightSkills[6] ? positions[rightSkills[6].name] : null;
  const r7 = rightSkills[7] ? positions[rightSkills[7].name] : null;

  return (
    <div ref={containerRef} className="w-full relative transition-colors duration-300">
      


      {/* MOBILE & TABLET LAYOUT */}
      {!isDesktop && <div className="space-y-6 w-full max-w-md mx-auto px-2">
        {rings.filter(r => activeFilter === 'All' || r.id === activeFilter).map((ring) => {
          const skills = ring.skills || [];
          return (
            <div 
              key={ring.id}
              className={`p-5 rounded-2xl border bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl`}
              style={{ borderColor: `${ring.color}33`, boxShadow: `0 0 20px ${ring.color}11` }}
            >
              <h3 className="text-sm font-black mb-4 uppercase tracking-wider" style={{ color: ring.color }}>
                {ring.label}
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => {
                  const config = getSkillConfig(skill.name);
                  const Icon = config.icon;
                  return (
                    <div key={skill.name} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border transition-all duration-300"
                          style={{ borderColor: config.color + '44', boxShadow: `0 0 10px ${config.color}15` }}
                        >
                          <Icon size={16} style={{ color: config.color }} />
                        </div>
                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                          {config.label}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden border border-gray-200/20 dark:border-gray-700/20">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.proficiency}%`, backgroundColor: config.color }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 font-mono w-8 text-right">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>}

      {/* DESKTOP RADIAL RADAR LAYOUT */}
      {isDesktop && <div className="relative w-full max-w-4xl mx-auto overflow-visible mt-12">
        {/* Soft, glowing radial background ring */}
        <div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center bg-glow-ring"
          style={{ transform: 'scale(1.05)' }}
        >
          <div 
            className="w-[500px] h-[500px] rounded-full opacity-[0.14] dark:opacity-[0.24] blur-3xl transition-all duration-700"
            style={{
              background: 'conic-gradient(from 0deg, #FF9F0A, #00D2FF, #00FF87, #BF5AF2, #FF9F0A)'
            }}
          />
        </div>

        <svg viewBox="0 -40 800 640" className="w-full h-auto select-none overflow-visible">
          <defs>
            <linearGradient id="left-branch-grad" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="right-branch-grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          {/* Inner ring (Databases) */}
          <circle 
            cx={CX} cy={CY} r={80} 
            fill="none" 
            className="guide-circle guide-circle-inner stroke-emerald-500/40 dark:stroke-emerald-500/25 stroke-[1.5]" 
            strokeDasharray="4 4" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'databases' ? 1 : 0.15 }}
          />
          {/* Middle ring (DevOps) */}
          <circle 
            cx={CX} cy={CY} r={165} 
            fill="none" 
            className="guide-circle guide-circle-middle stroke-violet-500/40 dark:stroke-violet-500/25 stroke-[1.5]" 
            strokeDasharray="4 4" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'devops' ? 1 : 0.15 }}
          />
          {/* Outer ring guide (Languages & Frameworks) */}
          <circle 
            cx={CX} cy={CY} r={245} 
            fill="none" 
            className="guide-circle guide-circle-outer stroke-gray-300 dark:stroke-gray-700/50 stroke-[1.2]" 
            strokeDasharray="6 6" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'languages' || activeFilter === 'frameworks' ? 1 : 0.15 }}
          />

          {Object.entries(positions).map(([name, pos]) => {
            if (pos.group === 'left-outer' || pos.group === 'right-outer') return null;
            const highlight = getHighlightState(name);
            const config = getSkillConfig(name);
            const lineOpacity = highlight === 'hovered' || highlight === 'connected' ? 0.7 : highlight === 'dimmed' ? 0.03 : 0.2;
            const strokeW = highlight === 'hovered' ? 2 : highlight === 'connected' ? 1.5 : 1;
            
            return (
              <line
                key={`spoke-${name}`}
                className="spoke-line stroke-gray-200 dark:stroke-gray-800/80 transition-all duration-300"
                x1={CX} y1={CY}
                x2={pos.x} y2={pos.y}
                stroke={highlight === 'hovered' || highlight === 'connected' ? config.color : undefined}
                strokeWidth={strokeW}
                style={{ 
                  strokeOpacity: lineOpacity,
                  filter: highlight === 'hovered' ? `drop-shadow(0 0 4px ${config.color})` : 'none'
                }}
              />
            );
          })}

          {connections.map((conn, idx) => {
            const fromPos = positions[conn.from];
            const toPos = positions[conn.to];
            if (!fromPos || !toPos) return null;

            const highlight = getLineHighlightState(conn);
            const config = getSkillConfig(conn.from);
            const opacity = highlight === 'highlighted' ? 0.8 : highlight === 'dimmed' ? 0.02 : 0.22;
            const strokeW = highlight === 'highlighted' ? 2.0 : 0.8;

            const mx = (fromPos.x + toPos.x) / 2;
            const my = (fromPos.y + toPos.y) / 2;
            const dx = CX - mx;
            const dy = CY - my;
            const d = `M ${fromPos.x} ${fromPos.y} Q ${mx + dx * 0.25} ${my + dy * 0.25} ${toPos.x} ${toPos.y}`;

            return (
              <path
                key={`conn-${idx}`}
                className="connection-line stroke-gray-200 dark:stroke-gray-800/60 transition-all duration-300"
                d={d}
                fill="none"
                stroke={highlight === 'highlighted' ? config.color : undefined}
                strokeWidth={strokeW}
                style={{ 
                  strokeOpacity: opacity,
                  filter: highlight === 'highlighted' ? `drop-shadow(0 0 6px ${config.color})` : 'none'
                }}
              />
            );
          })}

          {/* Left Ribbon (Languages) */}
          {p0 && p2 && p3 && p5 && (
            <g style={{ opacity: activeFilter === 'All' || activeFilter === 'languages' ? 1 : 0.1 }}>
              <path 
                d={`M ${CX - 150} ${CY} Q ${CX - 180} ${CY} 280 ${CY}`}
                fill="none" stroke="url(#left-branch-grad)" strokeWidth="6" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
              <path 
                d={`M 280 ${CY} C 220 ${CY - 20}, 160 ${CY - 70}, ${p2.x} ${p2.y} C ${p2.x - 20} ${p2.y - 30}, ${p1.x - 15} ${p1.y - 15}, ${p0.x} ${p0.y}`}
                fill="none" stroke="url(#left-branch-grad)" strokeWidth="5" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
              <path 
                d={`M 280 ${CY} C 220 ${CY + 20}, 160 ${CY + 70}, ${p3.x} ${p3.y} C ${p3.x - 20} ${p3.y + 30}, ${p4.x - 15} ${p4.y + 15}, ${p5.x} ${p5.y}`}
                fill="none" stroke="url(#left-branch-grad)" strokeWidth="5" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
            </g>
          )}

          {/* Right Ribbon (Frameworks) */}
          {r0 && r3 && r4 && r7 && (
            <g style={{ opacity: activeFilter === 'All' || activeFilter === 'frameworks' ? 1 : 0.1 }}>
              <path 
                d={`M ${CX + 150} ${CY} Q ${CX + 180} ${CY} 520 ${CY}`}
                fill="none" stroke="url(#right-branch-grad)" strokeWidth="6" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
              <path 
                d={`M 520 ${CY} C 580 ${CY - 20}, 640 ${CY - 70}, ${r3.x} ${r3.y} C ${r3.x + 20} ${r3.y - 30}, ${r1.x + 15} ${r1.y - 15}, ${r0.x} ${r0.y}`}
                fill="none" stroke="url(#right-branch-grad)" strokeWidth="5" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
              <path 
                d={`M 520 ${CY} C 580 ${CY + 20}, 640 ${CY + 70}, ${r4.x} ${r4.y} C ${r4.x + 20} ${r4.y + 30}, ${r6.x + 15} ${r6.y + 15}, ${r7.x} ${r7.y}`}
                fill="none" stroke="url(#right-branch-grad)" strokeWidth="5" strokeLinecap="round" className="branch-ribbon opacity-70 transition-opacity duration-300"
              />
            </g>
          )}

          {/* Languages Category Header */}
          <g 
            className="transition-all duration-300 cursor-pointer group" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'languages' ? 1 : 0.25 }}
            onClick={() => setActiveFilter(prev => prev === 'languages' ? 'All' : 'languages')}
          >
            <rect 
              x={190 - 65} 
              y={-5 - 15} 
              width={130} 
              height={30} 
              rx={15} 
              ry={15} 
              className={`transition-all duration-300 stroke-[1.5]
                ${activeFilter === 'languages'
                  ? 'fill-amber-100/90 dark:fill-amber-900/60 stroke-amber-500 dark:stroke-amber-400 stroke-[2]'
                  : 'fill-amber-50/80 dark:fill-amber-950/30 stroke-amber-500/30 dark:stroke-amber-500/15 hover:fill-amber-100/50 dark:hover:fill-amber-900/40 hover:stroke-amber-500/60 dark:hover:stroke-amber-400/50'
                }`}
            />
            <text 
              x={190} 
              y={-5} 
              dominantBaseline="central"
              textAnchor="middle" 
              className={`font-extrabold tracking-widest uppercase select-none transition-all duration-300
                ${activeFilter === 'languages'
                  ? 'text-[12.5px] fill-amber-800 dark:fill-amber-300 font-black'
                  : 'text-[12px] fill-amber-700 dark:fill-amber-400 hover:fill-amber-800 dark:hover:fill-amber-300'
                }`}
            >
              Languages
            </text>
          </g>
          
          {/* Frameworks Category Header */}
          <g 
            className="transition-all duration-300 cursor-pointer group" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'frameworks' ? 1 : 0.25 }}
            onClick={() => setActiveFilter(prev => prev === 'frameworks' ? 'All' : 'frameworks')}
          >
            <rect 
              x={610 - 75} 
              y={-5 - 15} 
              width={150} 
              height={30} 
              rx={15} 
              ry={15} 
              className={`transition-all duration-300 stroke-[1.5]
                ${activeFilter === 'frameworks'
                  ? 'fill-blue-100/90 dark:fill-blue-900/60 stroke-blue-500 dark:stroke-blue-400 stroke-[2]'
                  : 'fill-blue-50/80 dark:fill-blue-950/30 stroke-blue-500/30 dark:stroke-blue-500/15 hover:fill-blue-100/50 dark:hover:fill-blue-900/40 hover:stroke-blue-500/60 dark:hover:stroke-blue-400/50'
                }`}
            />
            <text 
              x={610} 
              y={-5} 
              dominantBaseline="central"
              textAnchor="middle" 
              className={`font-extrabold tracking-widest uppercase select-none transition-all duration-300
                ${activeFilter === 'frameworks'
                  ? 'text-[12.5px] fill-blue-800 dark:fill-blue-300 font-black'
                  : 'text-[12px] fill-blue-700 dark:fill-blue-400 hover:fill-blue-800 dark:hover:fill-blue-300'
                }`}
            >
              Frameworks
            </text>
          </g>
          
          {/* DevOps Category Header */}
          <g 
            className="transition-all duration-300 cursor-pointer group" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'devops' ? 1 : 0.25 }}
            onClick={() => setActiveFilter(prev => prev === 'devops' ? 'All' : 'devops')}
          >
            <rect 
              x={CX - 65} 
              y={95 - 12} 
              width={130} 
              height={24} 
              rx={12} 
              ry={12} 
              className={`transition-all duration-300 stroke-[1.2]
                ${activeFilter === 'devops'
                  ? 'fill-violet-100/90 dark:fill-violet-900/60 stroke-violet-500 dark:stroke-violet-400 stroke-[1.8]'
                  : 'fill-violet-50/80 dark:fill-violet-950/30 stroke-violet-500/30 dark:stroke-violet-500/15 hover:fill-violet-100/50 dark:hover:fill-violet-900/40 hover:stroke-violet-500/60 dark:hover:stroke-violet-400/50'
                }`}
            />
            <text 
              x={CX} 
              y={95} 
              dominantBaseline="central"
              textAnchor="middle" 
              className={`font-extrabold tracking-wider uppercase select-none transition-all duration-300
                ${activeFilter === 'devops'
                  ? 'text-[10.5px] fill-violet-800 dark:fill-violet-300 font-black'
                  : 'text-[10px] fill-violet-700 dark:fill-violet-400 hover:fill-violet-800 dark:hover:fill-violet-300'
                }`}
            >
              DevOps & Tools
            </text>
          </g>
          
          {/* Databases Category Header */}
          <g 
            className="transition-all duration-300 cursor-pointer group" 
            style={{ opacity: activeFilter === 'All' || activeFilter === 'databases' ? 1 : 0.25 }}
            onClick={() => setActiveFilter(prev => prev === 'databases' ? 'All' : 'databases')}
          >
            <rect 
              x={CX - 50} 
              y={455 - 12} 
              width={100} 
              height={24} 
              rx={12} 
              ry={12} 
              className={`transition-all duration-300 stroke-[1.2]
                ${activeFilter === 'databases'
                  ? 'fill-emerald-100/90 dark:fill-emerald-900/60 stroke-emerald-500 dark:stroke-emerald-400 stroke-[1.8]'
                  : 'fill-emerald-50/80 dark:fill-emerald-950/30 stroke-emerald-500/30 dark:stroke-emerald-500/15 hover:fill-emerald-100/50 dark:hover:fill-emerald-900/40 hover:stroke-emerald-500/60 dark:hover:stroke-emerald-400/50'
                }`}
            />
            <text 
              x={CX} 
              y={455} 
              dominantBaseline="central"
              textAnchor="middle" 
              className={`font-extrabold tracking-wider uppercase select-none transition-all duration-300
                ${activeFilter === 'databases'
                  ? 'text-[10.5px] fill-emerald-800 dark:fill-emerald-300 font-black'
                  : 'text-[10px] fill-emerald-700 dark:fill-emerald-400 hover:fill-emerald-800 dark:hover:fill-emerald-300'
                }`}
            >
              Databases
            </text>
          </g>

          {Object.entries(positions).map(([name, pos]) => {
            const config = getSkillConfig(name);
            const Icon = config.icon;
            const highlight = getHighlightState(name);
            
            let size = 46;
            let iconSize = 20;
            let textClass = "text-[10px]";
            if (pos.group === 'left-outer' || pos.group === 'right-outer') {
              size = 52;
              iconSize = 24;
              textClass = "text-[11px]";
            } else if (pos.group === 'inner') {
              size = 42;
              iconSize = 18;
              textClass = "text-[9.5px]";
            }

            const isHovered = highlight === 'hovered';
            const isConnected = highlight === 'connected';
            const isDimmed = highlight === 'dimmed';

            const foWidth = 90;
            const foHeight = 90;
            const foX = pos.x - foWidth / 2;
            const foY = pos.y - foHeight / 2;

            return (
              <foreignObject
                key={`badge-${name}`}
                x={foX} y={foY} width={foWidth} height={foHeight}
                className="overflow-visible"
              >
                <div 
                  className="desktop-skill-badge w-full h-full"
                  data-dx={CX - pos.x}
                  data-dy={CY - pos.y}
                >
                  <div 
                    className="w-full h-full flex flex-col items-center justify-start pointer-events-auto cursor-pointer transition-all duration-300"
                    style={{
                      opacity: isDimmed ? 0.25 : 1,
                      transform: isHovered ? 'scale(1.18)' : isConnected ? 'scale(1.06)' : 'scale(1)',
                    }}
                    onMouseEnter={() => {
                      if (activeFilter !== 'All' && getSkillRing(name) !== activeFilter) return;
                      setHoveredSkill(name);
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div 
                      className="rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border transition-all duration-300 shadow-md"
                      style={{ 
                        width: `${size}px`, height: `${size}px`,
                        borderColor: isHovered || isConnected ? config.color : config.color + '33',
                        boxShadow: isHovered ? `0 0 20px ${config.color}aa, inset 0 0 6px ${config.color}22` : isConnected ? `0 0 12px ${config.color}66` : `0 2px 8px rgba(0, 0, 0, 0.05), 0 0 8px ${config.color}10`,
                        borderWidth: isHovered ? '2.5px' : '1.5px',
                      }}
                    >
                      <Icon size={iconSize} className="transition-colors duration-300" style={{ color: config.color }} />
                    </div>

                    <span 
                      className={`mt-1.5 font-bold tracking-tight text-center max-w-[85px] leading-tight select-none transition-colors duration-300 ${textClass} ${isHovered ? 'text-gray-900 dark:text-white font-extrabold' : 'text-gray-600 dark:text-gray-300'}`}
                    >
                      {config.label}
                    </span>

                    {isHovered && (
                      <div className="absolute top-[-26px] bg-gray-900/95 dark:bg-white/95 text-white dark:text-gray-900 text-[8px] font-black px-2 py-0.5 rounded-md shadow-lg pointer-events-none uppercase tracking-wider animate-fade-in">
                        {pos.skill.proficiency}%
                      </div>
                    )}
                  </div>
                </div>
              </foreignObject>
            );
          })}

          <g 
            className="center-hub cursor-pointer select-none group/hub"
            onClick={() => setActiveFilter('All')}
          >
            <circle cx={CX} cy={CY} r={28} className="center-circle-1 fill-white dark:fill-gray-950 stroke-orange-500 stroke-[1.5] transition-all duration-300 group-hover/hub:stroke-orange-600 dark:group-hover/hub:stroke-orange-400 group-hover/hub:scale-105 origin-center" style={{ filter: 'drop-shadow(0 0 6px rgba(252, 87, 27, 0.4))' }} />
            <circle cx={CX} cy={CY} r={25} fill="none" className="center-circle-2 stroke-gray-100 dark:stroke-gray-900 stroke-[1]" />
            <text x={CX} y={295} textAnchor="middle" className="center-text-1 text-[9px] font-black tracking-widest fill-orange-500 group-hover/hub:fill-orange-600 dark:group-hover/hub:fill-orange-400 transition-colors duration-300">MY</text>
            <text x={CX} y={311} textAnchor="middle" className="center-text-2 text-[9px] font-black tracking-widest fill-orange-500 group-hover/hub:fill-orange-600 dark:group-hover/hub:fill-orange-400 transition-colors duration-300">SKILLS</text>
          </g>
        </svg>
      </div>}
    </div>
  );
}
