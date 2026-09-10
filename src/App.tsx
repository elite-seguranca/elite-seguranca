import { useEffect, useRef, useState } from 'react';
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  ClipboardList,
  Lightbulb,
  Smartphone,
  Search,
  FileText,
  Bell,
  Lock,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  HardHat,
  Info,
  Mail,
  Phone,
  MapPin,
  Eye,
  PenLine,
  ShieldAlert,
} from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['inicio', 'problema', 'solucao', 'funcionalidades', 'contato'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'problema', label: 'O Problema' },
    { id: 'solucao', label: 'A Solução' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'contato', label: 'Contato' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* PROTOTYPE BANNER */}
      <div className="bg-amber-500 text-white text-center text-xs font-semibold py-2 px-4 flex items-center justify-center gap-2">
        <Info size={14} className="shrink-0" />
        <span>PROTÓTIPO DE TESTE — Conteúdo fictício para fins de apresentação acadêmica. Este aplicativo não existe oficialmente.</span>
      </div>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-blue-800 to-emerald-600 p-2 rounded-lg shadow-sm">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">APP SEGURANÇA</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <HeroSection />

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* SOLUTION SECTION */}
      <SolutionSection />

      {/* FEATURES SECTION */}
      <FeaturesSection />

      {/* HOW IT WORKS SECTION */}
      <HowItWorksSection />

      {/* APP SCREENS SECTION */}
      <AppScreensSection />

      {/* BENEFITS SECTION */}
      <BenefitsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ===================== HERO ===================== */
function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute top-20 -right-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <HardHat size={16} />
              Segurança do Trabalho
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Segurança do Trabalho de forma{' '}
              <span className="gradient-text">mais simples.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O aplicativo busca facilitar a prevenção e o acesso a informações de
              segurança no ambiente de trabalho, centralizando ferramentas e
              orientações em um único lugar. Um conceito em desenvolvimento,
              pensado para tornar a segurança mais acessível a todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('solucao')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-800/20 hover:shadow-xl hover:shadow-blue-800/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Conheça o projeto
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                Funcionalidades
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-500">
                <Lock size={16} className="text-emerald-600" />
                <span className="text-sm">Dados protegidos</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Smartphone size={16} className="text-blue-800" />
                <span className="text-sm">Acesso mobile</span>
              </div>
            </div>
          </div>

          {/* Mockup Placeholder */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-3 border border-slate-100 max-w-sm">
                <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl overflow-hidden">
                  {/* App mockup screen */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={20} className="text-emerald-400" />
                        <span className="text-white font-semibold text-sm">APP SEGURANÇA</span>
                      </div>
                      <Bell size={18} className="text-slate-400" />
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <p className="text-slate-300 text-xs mb-1">Bem-vindo</p>
                      <p className="text-white font-semibold text-lg">Dashboard de Segurança</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3">
                        <ShieldCheck size={18} className="text-emerald-400 mb-2" />
                        <p className="text-white text-xs font-medium">Riscos identificados</p>
                        <p className="text-emerald-400 text-2xl font-bold">12</p>
                      </div>
                      <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-3">
                        <AlertTriangle size={18} className="text-amber-400 mb-2" />
                        <p className="text-white text-xs font-medium">Ocorrências</p>
                        <p className="text-amber-400 text-2xl font-bold">03</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/30 flex items-center justify-center">
                          <Search size={14} className="text-blue-300" />
                        </div>
                        <span className="text-slate-300 text-xs">Consultar informações</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/30 flex items-center justify-center">
                          <ClipboardList size={14} className="text-emerald-300" />
                        </div>
                        <span className="text-slate-300 text-xs">Registrar ocorrência</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 animate-float">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle size={16} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Prevenção ativa</p>
                  <p className="text-[10px] text-slate-500">Em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== PROBLEM ===================== */
function ProblemSection() {
  const problems = [
    {
      icon: BookOpen,
      title: 'Falta de informação acessível',
      desc: 'Muitos trabalhadores têm dificuldade em encontrar informações claras e diretas sobre segurança no ambiente de trabalho, dispersas em diversos locais.',
      color: 'amber',
    },
    {
      icon: AlertTriangle,
      title: 'Dificuldade na identificação de riscos',
      desc: 'Sem ferramentas adequadas, identificar riscos potenciais no dia a dia se torna um desafio, aumentando a exposição a acidentes evitáveis.',
      color: 'red',
    },
    {
      icon: ClipboardList,
      title: 'Falta de organização das informações',
      desc: 'Documentos, orientações e registros ficam espalhados, dificultando o acesso rápido em momentos importantes e a gestão eficiente.',
      color: 'blue',
    },
  ];

  const colorMap: Record<string, string> = {
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
  };

  return (
    <section id="problema" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="O Problema"
          title="Desafios reais na gestão da segurança"
          subtitle="Entendemos que a segurança do trabalho enfrenta barreiras que podem ser superadas com tecnologia e organização. Abaixo, três problemas fictícios que representam desafios comuns."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} colorClass={colorMap[p.color]} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  desc,
  colorClass,
  delay,
}: {
  icon: typeof Shield;
  title: string;
  desc: string;
  colorClass: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${colorClass} transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ===================== SOLUTION ===================== */
function SolutionSection() {
  return (
    <section id="solucao" className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Lightbulb size={16} />
              A Solução
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Uma plataforma centralizada para a{' '}
              <span className="text-emerald-600">Segurança do Trabalho</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              O aplicativo reúne em um só lugar todas as informações, ferramentas
              e orientações necessárias para promover um ambiente de trabalho
              mais seguro. Em vez de buscar dados em múltiplos lugares, o
              trabalhador tem acesso rápido e organizado a tudo o que precisa.
            </p>
            <div className="space-y-4">
              {[
                'Informações centralizadas e fáceis de acessar',
                'Ferramentas práticas para o dia a dia',
                'Orientações claras e sempre disponíveis',
                'Registro simplificado de ocorrências',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-emerald-100 rounded-lg p-1.5 mt-0.5 shrink-0">
                    <CheckCircle size={16} className="text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10 rounded-3xl" />
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Engenheiros de segurança revisando planos em canteiro de obras"
              className="relative rounded-2xl shadow-xl w-full object-cover border-4 border-white"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2.5 rounded-lg">
                  <ShieldCheck size={20} className="text-blue-800" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Plataforma unificada</p>
                  <p className="text-xs text-slate-500">Tudo em um só lugar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== FEATURES ===================== */
function FeaturesSection() {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Identificação de Riscos',
      desc: 'Ferramentas para mapear e identificar riscos potenciais no ambiente de trabalho de forma rápida e visual.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Consulta de Informações',
      desc: 'Acesso rápido a normas, procedimentos e documentações de segurança, tudo organizado e pesquisável.',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: ClipboardList,
      title: 'Registro de Ocorrências',
      desc: 'Sistema simplificado para registrar incidentes e ocorrências, mantendo um histórico completo e acessível.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Lightbulb,
      title: 'Orientações de Segurança',
      desc: 'Guias práticos e orientações claras sobre melhores práticas, equipamentos de proteção e procedimentos.',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Funcionalidades"
          title="Recursos pensados para o dia a dia"
          subtitle="Cada funcionalidade foi idealizada para resolver um problema específico, tornando a segurança do trabalho mais prática e eficiente."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: typeof Shield;
  title: string;
  desc: string;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ===================== HOW IT WORKS ===================== */
function HowItWorksSection() {
  const steps = [
    {
      icon: Lock,
      step: '01',
      title: 'Acessar',
      desc: 'Entre no aplicativo com seu perfil e tenha acesso imediato a todas as ferramentas de segurança.',
    },
    {
      icon: Eye,
      step: '02',
      title: 'Identificar',
      desc: 'Identifique riscos e perigos no ambiente de trabalho utilizando as ferramentas de mapeamento.',
    },
    {
      icon: PenLine,
      step: '03',
      title: 'Registrar',
      desc: 'Registre ocorrências, incidentes e observações de forma simples e organizada no sistema.',
    },
    {
      icon: ShieldAlert,
      step: '04',
      title: 'Prevenir',
      desc: 'Acesse orientações e tome medidas preventivas baseadas nos dados registrados no aplicativo.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Como Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Quatro etapas simples
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Do acesso à prevenção, um fluxo direto para tornar a segurança do trabalho parte da rotina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-700 via-emerald-600 to-blue-700" />

          {steps.map((s, i) => (
            <HowItWorksCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard({
  icon: Icon,
  step,
  title,
  desc,
  delay,
}: {
  icon: typeof Shield;
  step: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative text-center ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative inline-flex mb-5">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 flex items-center justify-center shadow-xl">
          <Icon size={32} className="text-emerald-400" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ===================== APP SCREENS ===================== */
function AppScreensSection() {
  const screens = [
    { img: 'https://images.pexels.com/photos/3846183/pexels-photo-3846183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Tela inicial' },
    { img: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Identificação de riscos' },
    { img: 'https://images.pexels.com/photos/8486934/pexels-photo-8486934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Consulta de informações' },
    { img: 'https://images.pexels.com/photos/39174644/pexels-photo-39174644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Registro de ocorrências' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Telas do Aplicativo"
          title="Veja como o aplicativo funciona"
          subtitle="Estas são imagens fictícias apenas para demonstração. As telas reais estarão disponíveis quando o aplicativo for desenvolvido."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
          {screens.map((s, i) => (
            <AppScreenCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-amber-600 bg-amber-50 rounded-xl py-3 px-4 max-w-2xl mx-auto">
          <Info size={16} className="shrink-0" />
          <span className="text-sm font-medium text-center">Imagens ilustrativas — o aplicativo ainda está em fase de conceito.</span>
        </div>
      </div>
    </section>
  );
}

function AppScreenCard({ img, label, delay }: { img: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-[9/16] overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 pt-10">
        <p className="text-white font-semibold text-sm">{label}</p>
      </div>
    </div>
  );
}

/* ===================== BENEFITS ===================== */
function BenefitsSection() {
  const benefits = [
    { icon: TrendingUp, title: 'Maior eficiência', desc: 'Processos mais rápidos e organizados para gerenciar a segurança.' },
    { icon: Clock, title: 'Economia de tempo', desc: 'Informações centralizadas reduzem o tempo de busca e consulta.' },
    { icon: ShieldCheck, title: 'Prevenção ativa', desc: 'Identificação antecipada de riscos ajuda a evitar acidentes.' },
    { icon: Users, title: 'Acessível a todos', desc: 'Interface intuitiva para que qualquer trabalhador possa usar.' },
    { icon: BookOpen, title: 'Conhecimento organizado', desc: 'Todas as orientações e normas em um só lugar, sempre disponíveis.' },
    { icon: Bell, title: 'Avisos em tempo real', desc: 'Notificações sobre novas orientações e atualizações importantes.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Benefícios"
          title="Vantagens para o ambiente de trabalho"
          subtitle="O aplicativo traz benefícios concretos para trabalhadores e gestores, promovendo uma cultura de segurança mais forte."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Shield;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-gradient-to-br from-blue-800 to-emerald-600 rounded-xl p-3 shadow-md shrink-0">
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ===================== CONTACT ===================== */
function ContactSection() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Mail size={16} />
              Contato
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Ficou com dúvidas sobre o projeto?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Este é um projeto acadêmico em fase de conceito. Entre em contato
              para saber mais sobre a proposta, tirar dúvidas ou contribuir com
              sugestões para o desenvolvimento do aplicativo.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                  <Mail size={20} className="text-blue-800" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">E-mail</p>
                  <p className="font-semibold text-slate-800">contato@appseguranca.exemplo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                  <Phone size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Telefone (fictício)</p>
                  <p className="font-semibold text-slate-800">(00) 0000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                  <MapPin size={20} className="text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localização (fictícia)</p>
                  <p className="font-semibold text-slate-800">Instituição de Ensino — Cidade, Estado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Mensagem enviada! (Demonstração — nenhum dado foi realmente enviado.)');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-800/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Enviar mensagem
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-center text-slate-400">
                Formulário demonstrativo — os dados não são armazenados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-gradient-to-br from-blue-700 to-emerald-600 p-2 rounded-lg">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">APP SEGURANÇA</span>
            </div>
            <p className="text-sm leading-relaxed">
              Protótipo de um aplicativo para facilitar a prevenção e o acesso a
              informações de Segurança do Trabalho.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'problema', label: 'O Problema' },
                { id: 'solucao', label: 'A Solução' },
                { id: 'funcionalidades', label: 'Funcionalidades' },
                { id: 'contato', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sobre o projeto</h4>
            <p className="text-sm leading-relaxed mb-3">
              Projeto acadêmico — Segurança do Trabalho
            </p>
            <p className="text-sm leading-relaxed text-amber-400/80">
              Conteúdo demonstrativo para fins de apresentação.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center sm:text-left">
            © 2026 APP SEGURANÇA — Projeto acadêmico. Todos os dados são fictícios.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <Info size={12} />
            <span>Protótipo de teste — não é um produto real</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===================== SHARED ===================== */
function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{title}</h2>
      <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
    </div>
  );
}

export default App;
