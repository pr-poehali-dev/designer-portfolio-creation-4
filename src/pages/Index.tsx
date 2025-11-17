import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'logos', title: 'Логотипы', icon: 'Sparkles', gradient: 'gradient-bg-1' },
  { id: 'websites', title: 'Сайты', icon: 'Monitor', gradient: 'gradient-bg-2' },
  { id: 'print', title: 'Полиграфия', icon: 'FileText', gradient: 'gradient-bg-3' },
  { id: 'presentations', title: 'Презентации', icon: 'Presentation', gradient: 'gradient-bg-4' }
];

const portfolioItems = {
  logos: [
    { id: 1, title: 'Brand Identity', client: 'Tech Startup', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/627bd0bf-b58a-484c-98a5-b8584cff62f8.jpg' },
    { id: 2, title: 'Logo Design', client: 'Retail Brand', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/627bd0bf-b58a-484c-98a5-b8584cff62f8.jpg' },
    { id: 3, title: 'Corporate Identity', client: 'Finance Corp', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/627bd0bf-b58a-484c-98a5-b8584cff62f8.jpg' },
    { id: 4, title: 'Minimalist Logo', client: 'Design Studio', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/627bd0bf-b58a-484c-98a5-b8584cff62f8.jpg' }
  ],
  websites: [
    { id: 5, title: 'E-commerce Platform', client: 'Fashion Brand', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/ac689536-097c-472a-8d5b-8801d74b25f7.jpg' },
    { id: 6, title: 'Portfolio Website', client: 'Photographer', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/ac689536-097c-472a-8d5b-8801d74b25f7.jpg' },
    { id: 7, title: 'Corporate Website', client: 'Consulting Firm', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/ac689536-097c-472a-8d5b-8801d74b25f7.jpg' },
    { id: 8, title: 'Landing Page', client: 'SaaS Product', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/ac689536-097c-472a-8d5b-8801d74b25f7.jpg' }
  ],
  print: [
    { id: 9, title: 'Business Cards', client: 'Law Firm', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/eee844ad-c0a0-47af-b4d6-315cb6d151df.jpg' },
    { id: 10, title: 'Magazine Layout', client: 'Publishing House', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/eee844ad-c0a0-47af-b4d6-315cb6d151df.jpg' },
    { id: 11, title: 'Brochure Design', client: 'Real Estate', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/eee844ad-c0a0-47af-b4d6-315cb6d151df.jpg' },
    { id: 12, title: 'Poster Series', client: 'Cultural Event', image: 'https://cdn.poehali.dev/projects/85fa3c63-41d2-4ce0-ab07-a59c051e0585/files/eee844ad-c0a0-47af-b4d6-315cb6d151df.jpg' }
  ],
  presentations: [
    { id: 13, title: 'Pitch Deck', client: 'Startup', image: '/placeholder.svg' },
    { id: 14, title: 'Annual Report', client: 'Corporation', image: '/placeholder.svg' },
    { id: 15, title: 'Product Launch', client: 'Tech Company', image: '/placeholder.svg' },
    { id: 16, title: 'Conference Slides', client: 'Non-Profit', image: '/placeholder.svg' }
  ]
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('logos');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="fixed w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: 'radial-gradient(circle, rgba(255,27,107,0.3) 0%, rgba(69,202,255,0.2) 50%, rgba(255,217,61,0.1) 100%)',
        }}
      />
      
      <div className="fixed top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-rotate" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-2xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight gradient-text hover:scale-105 transition-transform cursor-pointer">
            DESIGNER
          </h1>
          <div className="flex gap-8">
            <button className="text-sm font-medium hover:text-primary transition-all relative group px-3 py-2">
              Портфолио
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full" />
            </button>
            <button className="text-sm font-medium hover:text-primary transition-all relative group px-3 py-2">
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full" />
            </button>
          </div>
        </div>
      </nav>

      <section 
        ref={heroRef}
        className="relative pt-40 pb-32 px-6"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl animate-scale-in hover:scale-105 transition-transform cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Creative Design Studio 2024</span>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-bold tracking-tight mb-10 animate-fade-in leading-tight">
            Создаю<br />
            <span className="gradient-text inline-block hover:scale-105 transition-transform cursor-pointer">
              визуальную
            </span><br />
            <span className="relative inline-block">
              магию
              <svg className="absolute -bottom-4 left-0 w-full h-8 text-primary/30" viewBox="0 0 300 20">
                <path d="M0 10 Q150 20 300 10" stroke="currentColor" fill="none" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          
          <p className="text-2xl text-foreground/70 font-medium max-w-2xl animate-fade-in leading-relaxed mb-10">
            Смелые идеи × Яркие решения × Незабываемый дизайн
          </p>

          <div className="flex gap-4 animate-fade-in">
            <button className="group px-8 py-4 gradient-bg-1 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
              <span>Смотреть работы</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-xl text-foreground font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              Связаться
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex gap-6 mb-20 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`flex items-center gap-3 px-8 py-4 rounded-3xl border-2 transition-all whitespace-nowrap animate-fade-in group ${
                  activeCategory === cat.id
                    ? `${cat.gradient} text-white border-transparent shadow-2xl scale-105`
                    : 'bg-white/10 backdrop-blur-xl text-foreground border-white/20 hover:border-primary/50 hover:scale-105 hover:shadow-xl hover:bg-white/20'
                }`}
              >
                <Icon 
                  name={cat.icon} 
                  size={24} 
                  className={activeCategory === cat.id ? '' : 'group-hover:rotate-12 transition-transform'}
                />
                <span className="font-semibold text-lg">{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioItems[activeCategory as keyof typeof portfolioItems].map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${index * 0.15}s` }}
                className="group cursor-pointer animate-scale-in"
              >
                <div className="aspect-[4/3] mb-5 overflow-hidden rounded-3xl relative shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                    <Icon name="Eye" size={20} className="text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between text-white mb-3">
                      <span className="text-sm font-medium px-4 py-1 bg-white/20 backdrop-blur-xl rounded-full">
                        {item.client}
                      </span>
                      <Icon name="ArrowUpRight" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-base text-muted-foreground font-medium">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary via-secondary to-accent p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Готовы создать<br />что-то крутое?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl">
                Давайте воплотим вашу идею в яркий и запоминающийся дизайн
              </p>
              <button className="px-10 py-5 bg-white text-foreground font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3 group">
                <span>Начать проект</span>
                <Icon name="Rocket" size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-20 px-6 border-t border-white/10 mt-40 bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h3 className="text-4xl font-bold gradient-text mb-3 hover:scale-105 transition-transform cursor-pointer inline-block">
                DESIGNER
              </h3>
              <p className="text-sm text-muted-foreground font-medium">Создаю визуальную магию с 2020</p>
            </div>
            <div className="flex gap-4">
              <button className="group w-14 h-14 rounded-2xl gradient-bg-1 text-white font-semibold hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
                <Icon name="Instagram" size={24} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button className="group w-14 h-14 rounded-2xl gradient-bg-2 text-white font-semibold hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
                <Icon name="Linkedin" size={24} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button className="group w-14 h-14 rounded-2xl gradient-bg-3 text-white font-semibold hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
                <Icon name="Mail" size={24} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Designer Portfolio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
