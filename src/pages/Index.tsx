import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-rotate" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight gradient-text">DESIGNER</h1>
          <div className="flex gap-8">
            <button className="text-sm font-medium hover:text-primary transition-colors relative group">
              Портфолио
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
            <button className="text-sm font-medium hover:text-primary transition-colors relative group">
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 animate-scale-in">
            <span className="text-sm font-medium text-primary">✨ Creative Design Studio</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-bold tracking-tight mb-8 animate-fade-in">
            Создаю<br />
            <span className="gradient-text">визуальную</span><br />
            магию
          </h2>
          <p className="text-2xl text-foreground/70 font-medium max-w-2xl animate-fade-in leading-relaxed">
            Смелые идеи × Яркие решения × Незабываемый дизайн
          </p>
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
                className={`flex items-center gap-3 px-8 py-4 rounded-3xl border-2 transition-all whitespace-nowrap animate-fade-in ${
                  activeCategory === cat.id
                    ? `${cat.gradient} text-white border-transparent shadow-2xl scale-105`
                    : 'bg-card text-foreground border-border hover:border-primary hover:scale-105 hover:shadow-xl'
                }`}
              >
                <Icon name={cat.icon} size={24} />
                <span className="font-semibold text-lg">{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
            {portfolioItems[activeCategory as keyof typeof portfolioItems].map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${index * 0.15}s` }}
                className="group cursor-pointer animate-scale-in"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 mb-5 overflow-hidden rounded-3xl relative shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name="ArrowUpRight" size={20} />
                      <span className="font-semibold">Смотреть проект</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-base text-muted-foreground font-medium">{item.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative py-16 px-6 border-t border-border/50 mt-40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">DESIGNER</h3>
              <p className="text-sm text-muted-foreground font-medium">Создаю визуальную магию с 2020</p>
            </div>
            <div className="flex gap-6">
              <button className="px-6 py-3 rounded-2xl gradient-bg-1 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
                Instagram
              </button>
              <button className="px-6 py-3 rounded-2xl gradient-bg-2 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
                Behance
              </button>
              <button className="px-6 py-3 rounded-2xl gradient-bg-3 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all">
                Email
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
