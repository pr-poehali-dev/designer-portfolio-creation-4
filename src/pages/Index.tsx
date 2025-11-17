import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'logos', title: 'Логотипы', icon: 'Sparkles' },
  { id: 'websites', title: 'Сайты', icon: 'Monitor' },
  { id: 'print', title: 'Полиграфия', icon: 'FileText' },
  { id: 'presentations', title: 'Презентации', icon: 'Presentation' }
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
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-tight">Designer</h1>
          <div className="flex gap-8">
            <button className="text-sm font-light hover:text-muted-foreground transition-colors">
              Портфолио
            </button>
            <button className="text-sm font-light hover:text-muted-foreground transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-light tracking-tight mb-6 animate-fade-in">
            Создаю визуальные<br />решения
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl animate-fade-in">
            Минималистичный подход к дизайну с акцентом на функциональность и эстетику
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-8 mb-16 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-none border transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:border-foreground'
                }`}
              >
                <Icon name={cat.icon} size={20} />
                <span className="font-light">{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {portfolioItems[activeCategory as keyof typeof portfolioItems].map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-light mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border mt-32">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <p className="text-sm text-muted-foreground font-light">© 2024 Designer Portfolio</p>
          <div className="flex gap-6">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Email
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;