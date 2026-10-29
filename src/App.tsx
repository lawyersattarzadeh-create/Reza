import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  ChevronLeft,
  ArrowLeft,
  X,
  CheckCircle,
  Menu,
  Clock,
  Shield,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Send,
  Copy,
  ExternalLink,
  Lock,
  Settings,
  LogOut,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  Inbox,
  Trash2,
  User,
  MessageSquare,
  Globe,
  Download,
  Server,
  Check
} from 'lucide-react';

// Custom Persian Justice Scales SVG Component
const ScalesOfJusticeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3v17" />
    <path d="M5 21h14" />
    <path d="M4 7h16" />
    {/* Left Pan */}
    <path d="M4 7l-2.5 6h5L4 7z" />
    <path d="M1.5 13a2.5 2.5 0 0 0 5 0" />
    {/* Right Pan */}
    <path d="M20 7l-2.5 6h5L20 7z" />
    <path d="M17.5 13a2.5 2.5 0 0 0 5 0" />
    {/* Center top knob */}
    <circle cx="12" cy="3" r="1" fill="currentColor" />
  </svg>
);

// Custom Contract & Pen Icon
const ContractIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
    <path d="M16 19l4-4-2-2-4 4v2h2z" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// Custom Real Estate / House Icon
const RealEstateIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// Custom Legal Consultation Icon
const ConsultationIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
  </svg>
);

// Telegram Icon Component
const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  icon: 'scales' | 'contract' | 'realEstate' | 'consultation';
  fullDescription: string;
  keyServices: string[];
}

interface ConsultationInquiry {
  id: string;
  name: string;
  phone: string;
  subject: string;
  description: string;
  createdAt: string;
}

interface SiteContent {
  lawyerName: string;
  lawyerTitle: string;
  heroKicker: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  ctaButtonText: string;
  aboutBio: string;
  aboutPhilosophy: string;
  practiceAreasTitle: string;
  practiceAreasSubtitle: string;
  practiceAreas: PracticeArea[];
  address: string;
  officeSubTitle: string;
  phone: string;
  telegram: string;
  instagram: string;
  disclaimer: string;
}

const defaultContent: SiteContent = {
  lawyerName: 'محمدرضا ستارزاده امینی',
  lawyerTitle: 'وکیل دادگستری',
  heroKicker: 'دفتر وکالت',
  heroTitleLine1: 'اعتماد، دقت و رویکردی',
  heroTitleLine2: 'مسئولانه در امور حقوقی',
  heroSubtitle: 'معرفی خدمات حقوقی و راه‌های ارتباط با دفتر.',
  ctaButtonText: 'ارتباط با دفتر',
  aboutBio: 'دانش آموخته ی حقوق و دانشجوی کارشناسی ارشد حقوق خصوصی',
  aboutPhilosophy: 'دفتر وکالت ما بر پایه سه اصل اساسی بنا نهاده شده است: «صداقت کامل در بیان شانس موفقیت پرونده»، «تسلط عمیق بر مواد قانونی و آراء وحدت رویه» و «دقت بی‌وقفه در تنظیم لوایح دفاعیه و دادخواست‌ها».',
  practiceAreasTitle: 'حوزه‌های فعالیت',
  practiceAreasSubtitle: 'ارائه خدمات حقوقی در زمینه‌های مختلف با تکیه بر دقت، مسئولیت‌پذیری و تعهد حرفه‌ای.',
  practiceAreas: [
    {
      id: 'litigation',
      title: 'دعاوی حقوقی',
      shortDesc: 'پیگیری و دفاع از حقوق شما در دعاوی حقوقی',
      icon: 'scales',
      fullDescription: 'قبول وکالت و اعلام وکالت در کلیه مراجع قضایی دادگستری، دادگاه‌های عمومی حقوقی و تجدیدنظر، دیوان عالی کشور و مراجع شبه‌قضایی با تکیه بر بررسی همه‌جانبه مدارک، تدوین دقیق لوایح دفاعیه و دفاع موثر در جلسات رسیدگی.',
      keyServices: [
        'مطالبه وجه چک، سفته و برات با تامین خواسته فوری',
        'دعاوی الزام به ایفای تعهدات قراردادی و مطالبه خسارت',
        'دعاوی اسناد رسمی، ابطال و بطلان معامله و استرداد اموال',
        'پیگیری دعاوی شرکت‌های تجاری، سهامداران و ورشکستگی',
        'دفاع حرفه‌ای در دعاوی مسئولیت مدنی و جبران خسارات مالی'
      ]
    },
    {
      id: 'contracts',
      title: 'قراردادها',
      shortDesc: 'تنظیم و بررسی قراردادها با رویکرد حفظ منافع شما',
      icon: 'contract',
      fullDescription: 'خدمات تخصصی نگارش، ویرایش حقوقی، داوری و پیشگیری از ایجاد مناقشات آتی در انواع قراردادهای تجاری، بازرگانی، خدماتی و شراکتی بر اساس آخرین قوانین مدنی و استانداردهای حقوقی معتبر.',
      keyServices: [
        'تنظیم قراردادهای مشارکت مدنی، ساخت و ساز و سرمایه‌گذاری',
        'بررسی و تدوین شروط حل اختلاف، داوری و فسخ قرارداد',
        'تنظیم قراردادهای عدم افشای اطلاعات (NDA) و محرمانگی تجاری',
        'مشاوره پیش از امضای قراردادهای کلان تجاری و استخدامی',
        'مدیریت ریسک‌های قراردادی و تضمین حسن انجام تعهدات'
      ]
    },
    {
      id: 'real-estate',
      title: 'دعاوی ملکی',
      shortDesc: 'ارائه مشاوره و پیگیری دعاوی مرتبط با املاک و مستغلات',
      icon: 'realEstate',
      fullDescription: 'دعاوی ملکی نیازمند اشراف کامل به قوانین ثبتی، مقررات شهرداری و رویه‌های قضایی است. دفتر وکالت محمدرضا ستارزاده امینی پرونده‌های اراضی، املاک تجاری و مسکونی را با دقت فوق‌العاده پیگیری می‌نماید.',
      keyServices: [
        'الزام به تنظیم سند رسمی انتقال ملک، پایان‌کار و صورت‌مجلس تفکیکی',
        'دعاوی تصرف عدوانی، ممانعت از حق و مزاحمت ملکی',
        'تخلیه املاک مسکونی و تجاری (سرقفلی و حق کسب و پیشه)',
        'افراز، تفکیک، دستور فروش ملک مشاع و تقسیم ترکه ملکی',
        'ابطال اسناد مالکیت معارض و اصلاح اسناد ثبتی'
      ]
    },
    {
      id: 'consultation',
      title: 'مشاوره حقوقی',
      shortDesc: 'ارائه مشاوره تخصصی در مسائل حقوقی و قانونی',
      icon: 'consultation',
      fullDescription: 'مشاوره حقوقی پیشگیرانه موثرترین ابزار برای اجتناب از هزینه‌های دادرسی گزاف و سال‌ها رفت‌وآمد قضایی است. جلسات حضوری و تلفنی پس از بررسی دقیق اسناد و مستندات شما برگزار می‌گردد.',
      keyServices: [
        'تحلیل جامع ریسک‌های حقوقی پیش از هرگونه اقدام یا معامله',
        'تنظیم اظهارنامه‌های قضایی، دادخواست‌ها و شکواییه‌های مستدل',
        'برگزاری جلسات مذاکره و میانجی‌گری در اختلافات صنفی و خانوادگی',
        'مشاوره تخصصی مستمر به مدیران شرکت‌ها و اصناف',
        'ارائه گزارش مکتوب راهکارهای قانونی متناسب با شرایط پرونده'
      ]
    }
  ],
  address: 'تبریز، چهارراه بهشتی (منصور سابق)، ساختمان اداری ایپک، طبقه فوقانی بانک صادرات، واحد ۳۰۴',
  officeSubTitle: 'دفتر وکالت دکتر بهراد صغیری',
  phone: '۰۹۱۴۴۷۳۳۸۱۲',
  telegram: 'Sattarzadehamini',
  instagram: 'sttarzadehamini',
  disclaimer: 'این وب‌سایت صرفاً جهت ارائه اطلاعات عمومی است و به معنای ایجاد رابطه وکالت نیست.'
};

export default function App() {
  // Persistent Site Content State
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem('lawyer_office_content_v1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultContent;
  });

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('lawyer_admin_auth') === 'true';
  });
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [adminSaveSuccess, setAdminSaveSuccess] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState<'hero' | 'practice' | 'about' | 'contact' | 'inquiries' | 'domain'>('hero');
  const [copiedBackup, setCopiedBackup] = useState(false);

  const handleExportBackup = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `lawyer_website_backup_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      console.error(e);
      alert('خطا در دانلود فایل پشتیبان');
    }
  };

  const handleCopyBackup = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setCopiedBackup(true);
    setTimeout(() => setCopiedBackup(false), 2500);
  };

  // Client Consultation Inquiries (Private to Admin)
  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('lawyer_consultation_inquiries_v1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Modals & Navigation
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'دعاوی حقوقی',
    description: ''
  });

  const handleCopyPhone = () => {
    const rawNumber = content.phone.replace(/[^\d+]/g, '') || '09144733812';
    navigator.clipboard.writeText(content.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const saveInquiry = (methodNote: string) => {
    const newInquiry: ConsultationInquiry = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject,
      description: formData.description.trim() ? `${formData.description.trim()} (${methodNote})` : methodNote,
      createdAt: new Date().toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('lawyer_consultation_inquiries_v1', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem('lawyer_consultation_inquiries_v1', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearAllInquiries = () => {
    if (window.confirm('آیا از حذف تمامی درخواست‌های ثبت‌شده اطمینان دارید؟')) {
      setInquiries([]);
      try {
        localStorage.removeItem('lawyer_consultation_inquiries_v1');
      } catch (err) {
        console.error(err);
      }
    }
  };

  const createTelegramMessage = () => {
    const nameText = formData.name.trim() || 'ذکر نشده';
    const phoneText = formData.phone.trim() || 'ذکر نشده';
    const subjectText = formData.subject || 'دعاوی حقوقی';
    const descText = formData.description.trim() || 'بدون توضیحات تکمیلی';

    return `سلام جناب آقای ستارزاده امینی،\nدرخواست مشاوره حقوقی جدید از وب‌سایت دفتر وکالت:\n\n👤 نام و نام خانوادگی: ${nameText}\n📞 شماره تماس: ${phoneText}\n⚖️ موضوع پرونده: ${subjectText}\n📝 شرح مختصر: ${descText}`;
  };

  const handleSendToTelegram = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('لطفاً نام و شماره تماس خود را در فرم وارد نمایید.');
      return;
    }
    saveInquiry('ارسال مستقیم به تلگرام و ثبت در سامانه');
    const message = createTelegramMessage();
    const cleanTgHandle = content.telegram.replace('@', '');
    const telegramUrl = `https://t.me/${cleanTgHandle}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    setContactFormSubmitted(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('لطفاً نام و شماره تماس خود را در فرم وارد نمایید.');
      return;
    }
    saveInquiry('ثبت مستقیم در سایت');
    setContactFormSubmitted(true);
  };

  // Admin Authentication Check
  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername === '1362430501' && adminPassword === '#XP-R.1362430501') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('lawyer_admin_auth', 'true');
      setIsAdminLoginModalOpen(false);
      setIsAdminPanelOpen(true);
      setLoginError('');
      setAdminUsername('');
      setAdminPassword('');
    } else {
      setLoginError('نام کاربری یا رمز عبور اشتباه است. فقط مدیر سیستم مجاز به ورود است.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('lawyer_admin_auth');
    setIsAdminPanelOpen(false);
  };

  const handleSaveContent = () => {
    try {
      localStorage.setItem('lawyer_office_content_v1', JSON.stringify(content));
      setAdminSaveSuccess(true);
      setTimeout(() => setAdminSaveSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert('خطا در ذخیره‌سازی داده‌ها');
    }
  };

  const handleResetContent = () => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید تمام متن‌ها به حالت اولیه بازنشانی شوند؟')) {
      setContent(defaultContent);
      localStorage.removeItem('lawyer_office_content_v1');
      setAdminSaveSuccess(true);
      setTimeout(() => setAdminSaveSuccess(false), 2500);
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'scales':
        return <ScalesOfJusticeIcon className="w-10 h-10 text-[#B6955B]" />;
      case 'contract':
        return <ContractIcon className="w-10 h-10 text-[#B6955B]" />;
      case 'realEstate':
        return <RealEstateIcon className="w-10 h-10 text-[#B6955B]" />;
      case 'consultation':
        return <ConsultationIcon className="w-10 h-10 text-[#B6955B]" />;
      default:
        return <ScalesOfJusticeIcon className="w-10 h-10 text-[#B6955B]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1727] text-white font-['Vazirmatn',sans-serif] selection:bg-[#B6955B] selection:text-white" dir="rtl">
      {/* ==================== الف) هدر (Header / Navbar) ==================== */}
      <header className="sticky top-0 z-40 bg-[#0B1727]/95 backdrop-blur-md border-b border-[#B6955B]/20 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* سمت راست: آیکون طلایی ترازوی عدالت، در کنار آن نام و عنوان */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-full border border-[#B6955B]/40 flex items-center justify-center bg-[#0B1727] shadow-inner text-[#B6955B]">
              <ScalesOfJusticeIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight">
                {content.lawyerName}
              </span>
              <span className="text-[#B6955B] text-xs sm:text-sm font-medium">
                {content.lawyerTitle}
              </span>
            </div>
          </div>

          {/* وسط: منوی ناوبری */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#hero"
              className="text-white hover:text-[#B6955B] font-semibold transition-colors py-2"
            >
              صفحه اصلی
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-[#B6955B] transition-colors py-2"
            >
              درباره ما
            </a>
            <a
              href="#practice-areas"
              className="text-slate-300 hover:text-[#B6955B] transition-colors py-2"
            >
              حوزه‌های فعالیت
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-[#B6955B] transition-colors py-2"
            >
              ارتباط با دفتر
            </a>
          </nav>

          {/* سمت چپ: دکمه ارتباط با دفتر + دکمه منوی موبایل */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="group border border-[#B6955B] text-white hover:bg-[#B6955B] hover:text-[#0B1727] px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#B6955B] group-hover:text-[#0B1727] transition-colors" />
              <span>{content.ctaButtonText}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-[#B6955B] focus:outline-none cursor-pointer"
              aria-label="باز کردن منو"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1727] border-b border-[#B6955B]/30 px-6 py-4 space-y-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#B6955B] font-semibold text-sm py-1"
            >
              صفحه اصلی
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-right text-slate-200 hover:text-[#B6955B] text-sm py-1"
            >
              درباره ما
            </a>
            <a
              href="#practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#B6955B] text-sm py-1"
            >
              حوزه‌های فعالیت
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#B6955B] text-sm py-1"
            >
              ارتباط با دفتر
            </a>
          </div>
        )}
      </header>

      {/* ==================== ب) بخش اول (Hero Section) ==================== */}
      <section
        id="hero"
        className="relative bg-[#0B1727] min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden"
      >
        {/* تصویر وکیل در کل قسمت سمت چپ به صورت تمام‌قد بدون کادر با محو شدن نرم در پس‌زمینه */}
        <div className="absolute left-0 bottom-0 top-0 w-full lg:w-[50%] xl:w-[48%] flex items-end justify-center lg:justify-start pointer-events-none z-0">
          <div className="relative w-full h-full flex items-end">
            <img
              src="./face image/lawyer-portrait.jpeg"
              alt={`${content.lawyerName} - ${content.lawyerTitle}`}
              className="w-full h-full object-cover object-top opacity-30 lg:opacity-100 max-h-[780px]"
              loading="eager"
            />
            {/* محو شدن نرم لبه سمت راست تصویر به سمت فضای متن‌ها */}
            <div className="absolute inset-y-0 right-0 w-2/5 sm:w-1/2 bg-gradient-to-l from-[#0B1727] via-[#0B1727]/80 to-transparent pointer-events-none" />
            {/* محو شدن نرم لبه پایین تصویر */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1727] via-[#0B1727]/70 to-transparent pointer-events-none" />
            {/* محو شدن نرم لبه بالای تصویر */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B1727] via-[#0B1727]/60 to-transparent pointer-events-none" />
            {/* لایه تیره برای حفظ خوانایی متن در موبایل */}
            <div className="lg:hidden absolute inset-0 bg-[#0B1727]/75 pointer-events-none" />
          </div>
        </div>

        {/* محتوای متنی هیرو */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full z-10">
          <div className="w-full lg:w-7/12 space-y-6 text-right">
            {/* بالای تیتر: عبارت طلایی‌رنگ «دفتر وکالت» به همراه یک خط افقی طلایی */}
            <div className="flex items-center gap-3">
              <span className="text-[#B6955B] text-base sm:text-lg font-medium tracking-wide">
                {content.heroKicker}
              </span>
              <span className="w-16 sm:w-24 h-[1.5px] bg-[#B6955B]" />
            </div>

            {/* تیتر اصلی (بزرگ، سفید و بولد در دو خط) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.3] tracking-tight">
              {content.heroTitleLine1}
              <br />
              <span className="text-white">{content.heroTitleLine2}</span>
            </h1>

            {/* زیرتیتر (خاکستری روشن) */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {content.heroSubtitle}
            </p>

            {/* دکمه‌ها: دکمه کپسولی طلایی + لینک متنی سفید */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7">
              <a
                href="#contact"
                className="rounded-full bg-[#B6955B] hover:bg-[#a3844d] text-white px-7 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-[#B6955B]/25 flex items-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{content.ctaButtonText}</span>
              </a>

              <a
                href="#about"
                className="group text-white hover:text-[#B6955B] text-sm sm:text-base font-medium flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                <span>آشنایی با وکیل</span>
                <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-[#B6955B] transition-transform group-hover:-translate-x-1" />
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-6 border-t border-[#B6955B]/15 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#B6955B] shrink-0" />
                <span>امانت‌داری و تعهد حرفه‌ای</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B6955B] shrink-0" />
                <span>اشراف به رویه‌های قضایی</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B6955B] shrink-0" />
                <span>پیگیری مستمر پرونده</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== ج) بخش حوزه‌های فعالیت (Practice Areas) ==================== */}
      <section id="practice-areas" className="py-20 bg-[#F6F2EA] text-[#0B1727]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* عنوان بخش (وسط‌چین) */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="w-12 h-1 bg-[#B6955B] mx-auto mb-4 rounded-full" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1727] mb-3">
              {content.practiceAreasTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {content.practiceAreasSubtitle}
            </p>
          </div>

          {/* کارت‌ها (۴ کارت در یک ردیف در دسکتاپ، ریسپانسیو در موبایل) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.practiceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-[#F6F2EA] border border-[#B6955B]/40 hover:border-[#B6955B] rounded-2xl p-7 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
                onClick={() => setSelectedArea(area)}
              >
                {/* آیکون */}
                <div className="w-16 h-16 rounded-full bg-white/70 border border-[#B6955B]/30 flex items-center justify-center mb-5 text-[#B6955B] group-hover:scale-110 group-hover:border-[#B6955B] transition-transform duration-300 shadow-sm">
                  {renderIcon(area.icon)}
                </div>

                {/* عنوان */}
                <h3 className="text-xl font-bold text-[#0B1727] mb-3">
                  {area.title}
                </h3>

                {/* خط جداکننده کوتاه طلایی */}
                <div className="w-8 h-[2px] bg-[#B6955B] mb-4" />

                {/* توضیح */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {area.shortDesc}
                </p>

                {/* لینک پایین */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArea(area);
                  }}
                  className="text-[#B6955B] hover:text-[#91723b] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors group-hover:gap-2.5 cursor-pointer"
                >
                  <span>مشاهده جزئیات</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== د) بخش جامع ارتباط با دفتر و دریافت مشاوره حقوقی (Contact Section) ==================== */}
      <section id="contact" className="py-20 lg:py-24 bg-[#08101a] text-white border-t border-[#B6955B]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* عنوان بخش */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="w-12 h-1 bg-[#B6955B] mx-auto mb-4 rounded-full" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B6955B]/15 border border-[#B6955B]/30 text-[#B6955B] text-xs font-semibold mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>ارتباط مستقیم و نوبت‌دهی مشاوره</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              ارتباط با دفتر وکالت و دریافت مشاوره حقوقی
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              جهت تنظیم وقت مشاوره حضوری یا ارسال خلاصه موضوع پرونده، می‌توانید از فرم زیر یا راه‌های ارتباطی مستقیم دفتر استفاده فرمایید.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ستون اول: فرم ارسال مشخصات و پیام موکل */}
            <div className="lg:col-span-7 bg-[#0B1727] border border-[#B6955B]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#B6955B]/20">
                <div className="w-10 h-10 rounded-xl bg-[#B6955B]/15 border border-[#B6955B]/40 flex items-center justify-center text-[#B6955B]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    فرم ارسال مشخصات و درخواست وقت مشاوره
                  </h3>
                  <p className="text-xs text-slate-400">
                    ارسال مستقیم به تلگرام وکیل (@{content.telegram.replace('@', '')}) یا ثبت محرمانه در سامانه
                  </p>
                </div>
              </div>

              {contactFormSubmitted ? (
                <div className="bg-emerald-500/15 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">درخواست شما با موفقیت ثبت شد</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    مشخصات پرونده شما دریافت گردید. در اسرع وقت جهت بررسی و هماهنگی جلسه مشاوره حقوقی با شماره تماس ثبت‌شده ارتباط برقرار خواهد شد.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactFormSubmitted(false);
                      setFormData({ name: '', phone: '', subject: 'دعاوی حقوقی', description: '' });
                    }}
                    className="inline-block bg-[#B6955B] hover:bg-[#a3844d] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    ثبت درخواست جدید
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendToTelegram} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        نام و نام خانوادگی <span className="text-[#B6955B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: علی رضایی"
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B6955B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        شماره تماس همراه <span className="text-[#B6955B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0914xxxxxxx"
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 text-left focus:outline-none focus:border-[#B6955B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      موضوع پرونده
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6955B] transition-colors"
                    >
                      <option value="دعاوی حقوقی">دعاوی حقوقی و مالی</option>
                      <option value="قراردادها">تنظیم یا بازبینی قراردادها</option>
                      <option value="دعاوی ملکی">دعاوی ملکی، ثبتی و اراضی</option>
                      <option value="مشاوره حقوقی">مشاوره حقوقی تخصصی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      شرح مختصر پرونده یا سوال حقوقی (اختیاری)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="خلاصه‌ای از موضوع دعوی یا سوال حقوقی خود را بنویسید..."
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B6955B] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      className="w-full bg-[#B6955B] hover:bg-[#a3844d] text-white py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#B6955B]/25 transition-all cursor-pointer"
                    >
                      <TelegramIcon className="w-5 h-5" />
                      <span>ارسال مشخصات به تلگرام وکیل (@{content.telegram.replace('@', '')})</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      className="w-full border border-slate-600 hover:border-[#B6955B] text-slate-300 hover:text-white py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                    >
                      ثبت مستقیم در سایت بدون باز کردن تلگرام
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ستون دوم: معرفی وکیل، سوابق تحصیلی و اطلاعات تماس دفتر */}
            <div className="lg:col-span-5 space-y-4">
              {/* کارت سوابق تحصیلی و علمی وکیل (مقصد لینک درباره ما) */}
              <div
                id="about"
                className="bg-gradient-to-br from-[#10243d] via-[#0B1727] to-[#0d1e34] border-2 border-[#B6955B]/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden scroll-mt-28 group hover:border-[#B6955B]/70 transition-all duration-300"
              >
                {/* نور پس‌زمینه طلایی ملایم */}
                <div className="absolute top-0 left-0 w-28 h-28 bg-[#B6955B]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B6955B]/15 border border-[#B6955B]/35 text-[#B6955B] text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>درباره وکیل</span>
                    </div>
                    <span className="text-[#B6955B] text-xs font-bold bg-[#B6955B]/10 px-2.5 py-1 rounded-lg">
                      {content.lawyerTitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {content.lawyerName}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-[#B6955B]/20">
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#B6955B] shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-[#B6955B] font-semibold block mb-1">
                          سوابق تحصیلی و علمی:
                        </span>
                        <p className="text-slate-100 text-sm font-medium leading-relaxed">
                          {content.aboutBio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* کارت تماس تلفنی */}
              <div
                onClick={handleCopyPhone}
                className="bg-[#0B1727] border border-[#B6955B]/30 rounded-2xl p-5 hover:border-[#B6955B] transition-all cursor-pointer group shadow-lg"
                title="کلیک برای تماس یا کپی شماره"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#B6955B]/15 border border-[#B6955B]/30 flex items-center justify-center text-[#B6955B] group-hover:bg-[#B6955B] group-hover:text-[#0B1727] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">شماره تماس مستقیم دفتر</span>
                      <a
                        href={`tel:${content.phone.replace(/[^\d+]/g, '')}`}
                        className="text-white font-black text-lg sm:text-xl tracking-wider hover:text-[#B6955B] transition-colors dir-ltr block text-right"
                      >
                        {content.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-xs text-[#B6955B] bg-[#B6955B]/10 px-2.5 py-1 rounded-lg font-medium">
                    {copiedPhone ? '✓ کپی شد' : 'تماس / کپی'}
                  </span>
                </div>
              </div>

              {/* کارت تلگرام */}
              <a
                href={`https://t.me/${content.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B1727] border border-[#B6955B]/30 rounded-2xl p-5 hover:border-[#B6955B] transition-all block group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-colors">
                      <TelegramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">پیام‌رسان تلگرام</span>
                      <span className="text-white font-bold text-base tracking-wide dir-ltr block text-right">
                        @{content.telegram.replace('@', '')}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-[#B6955B] transition-colors">
                    ارسال پیام ←
                  </span>
                </div>
              </a>

              {/* کارت اینستاگرام */}
              <a
                href={`https://instagram.com/${content.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B1727] border border-[#B6955B]/30 rounded-2xl p-5 hover:border-[#B6955B] transition-all block group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#E1306C]/15 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">اینستاگرام رسمی</span>
                      <span className="text-white font-bold text-base tracking-wide block">
                        {content.instagram}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-[#B6955B] transition-colors">
                    مشاهده صفحه ←
                  </span>
                </div>
              </a>

              {/* کارت نشانی دفتر */}
              <div className="bg-[#0B1727] border border-[#B6955B]/30 rounded-2xl p-5 space-y-2 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#B6955B]/15 border border-[#B6955B]/30 flex items-center justify-center text-[#B6955B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B6955B] font-semibold block mb-1">
                      نشانی دفتر در تبریز:
                    </span>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {content.address}
                    </p>
                    <p className="text-white font-bold text-xs sm:text-sm pt-1">
                      {content.officeSubTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== فوتر نهایی سایت (Footer) ==================== */}
      <footer className="bg-[#070e17] text-white py-8 border-t border-[#B6955B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            {/* متن سلب مسئولیت */}
            <p className="text-center md:text-right max-w-md leading-relaxed text-slate-400/90">
              {content.disclaimer}
            </p>

            {/* لینک‌های ناوبری و دکمه مدیریت سایت */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-300">
              <a href="#hero" className="hover:text-[#B6955B] transition-colors">صفحه اصلی</a>
              <span className="text-[#B6955B]/40">|</span>
              <a href="#about" className="hover:text-[#B6955B] transition-colors">درباره ما</a>
              <span className="text-[#B6955B]/40">|</span>
              <a href="#practice-areas" className="hover:text-[#B6955B] transition-colors">حوزه‌های فعالیت</a>
              <span className="text-[#B6955B]/40">|</span>
              <a href="#contact" className="hover:text-[#B6955B] transition-colors">ارتباط با دفتر</a>
              <span className="text-[#B6955B]/40">|</span>

              {/* دکمه اختصاصی مدیریت سایت */}
              <button
                type="button"
                onClick={() => {
                  if (isAdminLoggedIn) {
                    setIsAdminPanelOpen(true);
                  } else {
                    setIsAdminLoginModalOpen(true);
                  }
                }}
                className="text-[#B6955B] hover:text-white transition-colors font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>مدیریت سایت</span>
              </button>
            </div>

            {/* نماد ترازو و نام وکیل */}
            <div className="flex items-center gap-2 text-white font-medium">
              <ScalesOfJusticeIcon className="w-4 h-4 text-[#B6955B]" />
              <span>{content.lawyerName} - {content.lawyerTitle}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== Modal: مشاهده جزئیات حوزه فعالیت ==================== */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#0B1727] border border-[#B6955B]/50 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-right max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#B6955B]/15 border border-[#B6955B]/40 flex items-center justify-center text-[#B6955B] shrink-0">
                {renderIcon(selectedArea.icon)}
              </div>
              <div>
                <span className="text-[#B6955B] text-xs font-medium">حوزه تخصصی</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="w-full h-px bg-[#B6955B]/20 my-4" />

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedArea.fullDescription}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-sm font-bold text-[#B6955B] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>خدمات و پرونده‌های تحت پوشش این حوزه:</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedArea.keyServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#B6955B] shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#B6955B]/20">
              <button
                onClick={() => {
                  setSelectedArea(null);
                  setIsContactModalOpen(true);
                }}
                className="flex-1 bg-[#B6955B] hover:bg-[#a3844d] text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>درخواست مشاوره در این حوزه</span>
              </button>
              <button
                onClick={() => setSelectedArea(null)}
                className="border border-slate-600 hover:border-slate-400 text-slate-300 py-2.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== Modal: ارتباط با دفتر و تعیین وقت ==================== */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#0B1727] border border-[#B6955B]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-right max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#B6955B]/15 border border-[#B6955B]/40 mx-auto flex items-center justify-center text-[#B6955B] mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                ارتباط با دفتر وکالت
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {content.lawyerName} - {content.lawyerTitle} در تبریز
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <a
                href={`tel:${content.phone.replace(/[^\d+]/g, '')}`}
                className="bg-[#B6955B] hover:bg-[#a3844d] text-white p-2.5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs font-semibold transition-all shadow-md text-center"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>تماس تلفنی</span>
              </a>

              <a
                href={`https://t.me/${content.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-white border border-[#229ED9]/50 p-2.5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs font-semibold transition-all shadow-md text-center"
              >
                <TelegramIcon className="w-4 h-4 text-[#229ED9] shrink-0" />
                <span>تلگرام</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="border border-[#B6955B]/40 text-slate-200 hover:bg-[#B6955B]/10 p-2.5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs font-medium transition-all text-center cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#B6955B] shrink-0" />
                <span>{copiedPhone ? 'کپی شد!' : 'کپی شماره'}</span>
              </button>
            </div>

            {/* Form */}
            {contactFormSubmitted ? (
              <div className="bg-[#B6955B]/10 border border-[#B6955B]/40 rounded-xl p-5 text-center space-y-4">
                <CheckCircle className="w-10 h-10 text-[#B6955B] mx-auto" />
                <h4 className="font-bold text-white text-base">درخواست شما با موفقیت ثبت گردید</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اطلاعات پرونده شما به صورت کاملاً محرمانه در سامانه دفتر ثبت شد و صرفاً در پنل اختصاصی وکیل دریافت گردیده است. کارشناس دفتر در اسرع وقت جهت بررسی و تعیین وقت با شما تماس خواهد گرفت.
                </p>
                <div className="pt-2 border-t border-[#B6955B]/20">
                  <p className="text-[11px] text-slate-400 mb-2">
                    همچنین در صورت تمایل می‌توانید این اطلاعات را در تلگرام نیز مستقیماً به وکیل ارسال نمایید:
                  </p>
                  <button
                    type="button"
                    onClick={handleSendToTelegram}
                    className="w-full bg-[#229ED9] hover:bg-[#1e8ec4] text-white py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <TelegramIcon className="w-4 h-4" />
                    <span>ارسال مشخصات به تلگرام @{content.telegram.replace('@', '')}</span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setContactFormSubmitted(false);
                    setIsContactModalOpen(false);
                    setFormData({ name: '', phone: '', subject: 'دعاوی حقوقی', description: '' });
                  }}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer pt-1 inline-block"
                >
                  بستن پنجره
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendToTelegram} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    نام و نام خانوادگی <span className="text-[#B6955B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثلاً: علی رضایی"
                    className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B6955B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    شماره تماس همراه <span className="text-[#B6955B]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912xxxxxxx"
                    className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 text-left focus:outline-none focus:border-[#B6955B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    موضوع پرونده
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6955B] transition-colors"
                  >
                    <option value="دعاوی حقوقی">دعاوی حقوقی و مالی</option>
                    <option value="قراردادها">تنظیم یا بازبینی قراردادها</option>
                    <option value="دعاوی ملکی">دعاوی ملکی، ثبتی و اراضی</option>
                    <option value="مشاوره حقوقی">مشاوره حقوقی عمومی / تخصصی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    شرح مختصر پرونده (اختیاری)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="خلاصه‌ای از موضوع دعوی یا سوال حقوقی خود را بنویسید..."
                    className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B6955B] transition-colors resize-none"
                  />
                </div>

                <div className="space-y-2.5 pt-1">
                  <button
                    type="submit"
                    className="w-full bg-[#B6955B] hover:bg-[#a3844d] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  >
                    <TelegramIcon className="w-5 h-5" />
                    <span>ارسال مشخصات به تلگرام وکیل (@{content.telegram.replace('@', '')})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="w-full border border-slate-600 hover:border-[#B6955B] text-slate-300 hover:text-white py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                  >
                    ثبت در سایت بدون باز کردن تلگرام
                  </button>
                </div>
              </form>
            )}

            <div className="mt-5 text-center text-xs text-slate-400">
              نشانی دفتر: {content.address}
            </div>
          </div>
        </div>
      )}

      {/* ==================== Modal: درباره ما و معرفی وکیل ==================== */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#0B1727] border border-[#B6955B]/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-right max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center sm:text-right space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6955B]/15 border border-[#B6955B]/30 text-[#B6955B] text-xs font-semibold mb-1">
                <Award className="w-4 h-4" />
                <span>معرفی وکیل و سوابق حقوقی</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {content.lawyerName}
              </h3>
              <p className="text-[#B6955B] text-sm sm:text-base font-bold">
                {content.lawyerTitle}
              </p>
              <div className="bg-[#132845]/70 border border-[#B6955B]/30 rounded-xl p-4 mt-3">
                <p className="text-slate-100 text-sm font-medium leading-relaxed">
                  {content.aboutBio}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-[#B6955B]/20 my-4" />

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-[#B6955B]" />
                <span>اصول و رویکرد حرفه‌ای در پذیرش دعاوی:</span>
              </h4>
              <p>
                {content.aboutPhilosophy}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-[#B6955B]/20 rounded-xl p-3.5 space-y-1">
                  <div className="font-semibold text-white text-xs sm:text-sm">دفاع مسئولانه</div>
                  <div className="text-xs text-slate-400">حضور مستمر در تمامی مراحل دادرسی و گزارش‌دهی به موکل</div>
                </div>
                <div className="bg-white/5 border border-[#B6955B]/20 rounded-xl p-3.5 space-y-1">
                  <div className="font-semibold text-white text-xs sm:text-sm">حفظ محرمانگی</div>
                  <div className="text-xs text-slate-400">امانت‌داری دقیق از اسرار تجاری و شخصی موکلان گرامی</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  setIsBioModalOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="flex-1 bg-[#B6955B] hover:bg-[#a3844d] text-white py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>درخواست وقت مشاوره حضوری</span>
              </button>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="border border-slate-600 hover:border-slate-400 text-slate-300 py-2.5 px-5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== Modal: ورود امن به مدیریت سایت ==================== */}
      {isAdminLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bg-[#0B1727] border border-[#B6955B]/60 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsAdminLoginModalOpen(false);
                setLoginError('');
              }}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#B6955B]/15 border border-[#B6955B]/40 mx-auto flex items-center justify-center text-[#B6955B] mb-3 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-1.5">
                ورود به بخش مدیریت سایت
              </h3>
              <p className="text-xs text-slate-300">
                این بخش به صورت اختصاصی برای وکیل و مدیر سایت محافظت شده است.
              </p>
            </div>

            {loginError && (
              <div className="mb-4 bg-red-500/15 border border-red-500/40 text-red-200 text-xs p-3 rounded-xl text-center leading-relaxed">
                {loginError}
              </div>
            )}

            <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  نام کاربری مدیر
                </label>
                <input
                  type="text"
                  required
                  dir="ltr"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="نام کاربری اختصاصی"
                  className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6955B] transition-colors text-left"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  رمز عبور
                </label>
                <div className="relative">
                  <input
                    type={showAdminPassword ? 'text' : 'password'}
                    required
                    dir="ltr"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="کلمه عبور"
                    className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6955B] transition-colors text-left pl-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPassword(!showAdminPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showAdminPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B6955B] hover:bg-[#a3844d] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer mt-2"
              >
                <Lock className="w-4 h-4" />
                <span>ورود به سامانه مدیریت</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==================== Modal: پنل جامع مدیریت و ادیت تمامی مطالب سایت ==================== */}
      {isAdminPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bg-[#0B1727] border-2 border-[#B6955B]/60 rounded-2xl max-w-4xl w-full p-5 sm:p-8 relative shadow-2xl text-right max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#B6955B]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B6955B]/20 border border-[#B6955B]/40 flex items-center justify-center text-[#B6955B]">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    پنل مدیریت و ویرایش مطالب سایت
                  </h3>
                  <span className="text-xs text-[#B6955B]">
                    کلیه تغییرات فوراً در صفحه اصلی اعمال و ذخیره خواهند شد
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleAdminLogout}
                  className="text-xs text-red-400 hover:text-red-300 border border-red-500/30 hover:bg-red-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="خروج از حساب مدیریت"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">خروج</span>
                </button>
                <button
                  onClick={() => setIsAdminPanelOpen(false)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Notification alert on save */}
            {adminSaveSuccess && (
              <div className="my-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm p-3 rounded-xl flex items-center justify-between animate-in fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تغییرات با موفقیت در سایت ذخیره و اعمال گردید!</span>
                </div>
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 my-4 border-b border-[#B6955B]/20 pb-2 overflow-x-auto text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setAdminActiveTab('hero')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer ${
                  adminActiveTab === 'hero'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                هدر و هیرو
              </button>
              <button
                type="button"
                onClick={() => setAdminActiveTab('practice')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer ${
                  adminActiveTab === 'practice'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                حوزه‌های فعالیت (۴ حوزه)
              </button>
              <button
                type="button"
                onClick={() => setAdminActiveTab('about')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer ${
                  adminActiveTab === 'about'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                درباره ما و رزومه
              </button>
              <button
                type="button"
                onClick={() => setAdminActiveTab('contact')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer ${
                  adminActiveTab === 'contact'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                اطلاعات تماس و فوتر
              </button>
              <button
                type="button"
                onClick={() => setAdminActiveTab('inquiries')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  adminActiveTab === 'inquiries'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                <Inbox className="w-4 h-4" />
                <span>پیام‌ها و درخواست‌های موکلین</span>
                {inquiries.length > 0 && (
                  <span className="bg-red-500 text-white text-[11px] px-1.5 py-0.5 rounded-full font-bold">
                    {inquiries.length}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setAdminActiveTab('domain')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  adminActiveTab === 'domain'
                    ? 'bg-[#B6955B] text-white font-bold'
                    : 'text-slate-300 hover:text-[#B6955B] hover:bg-white/5'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>راهنمای اتصال به دامنه و هاست</span>
              </button>
            </div>

            {/* Tab Contents: Scrollable */}
            <div className="flex-1 overflow-y-auto px-1 py-2 space-y-5 text-xs sm:text-sm">
              {/* Tab 1: Hero & Identity */}
              {adminActiveTab === 'hero' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">نام وکیل</label>
                      <input
                        type="text"
                        value={content.lawyerName}
                        onChange={(e) => setContent({ ...content, lawyerName: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">عنوان شغلی وکیل</label>
                      <input
                        type="text"
                        value={content.lawyerTitle}
                        onChange={(e) => setContent({ ...content, lawyerTitle: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">عبارت بالای تیتر هیرو</label>
                    <input
                      type="text"
                      value={content.heroKicker}
                      onChange={(e) => setContent({ ...content, heroKicker: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">خط اول تیتر اصلی هیرو</label>
                      <input
                        type="text"
                        value={content.heroTitleLine1}
                        onChange={(e) => setContent({ ...content, heroTitleLine1: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">خط دوم تیتر اصلی هیرو</label>
                      <input
                        type="text"
                        value={content.heroTitleLine2}
                        onChange={(e) => setContent({ ...content, heroTitleLine2: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">زیرتیتر هیرو</label>
                    <input
                      type="text"
                      value={content.heroSubtitle}
                      onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">متن دکمه اصلی هیرو</label>
                    <input
                      type="text"
                      value={content.ctaButtonText}
                      onChange={(e) => setContent({ ...content, ctaButtonText: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                    />
                  </div>
                </div>
              )}

              {/* Tab 2: Practice Areas */}
              {adminActiveTab === 'practice' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">تیتر بخش حوزه‌ها</label>
                      <input
                        type="text"
                        value={content.practiceAreasTitle}
                        onChange={(e) => setContent({ ...content, practiceAreasTitle: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">توضیح کوتاه زیر تیتر بخش</label>
                      <input
                        type="text"
                        value={content.practiceAreasSubtitle}
                        onChange={(e) => setContent({ ...content, practiceAreasSubtitle: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#B6955B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-5 pt-2">
                    {content.practiceAreas.map((area, idx) => (
                      <div key={area.id} className="p-4 bg-[#08101a] border border-[#B6955B]/30 rounded-xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#B6955B]">کارت {idx + 1}: {area.title}</span>
                          <span className="text-xs text-slate-400">شناسه: {area.id}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-300 mb-1">عنوان کارت</label>
                            <input
                              type="text"
                              value={area.title}
                              onChange={(e) => {
                                const newAreas = [...content.practiceAreas];
                                newAreas[idx].title = e.target.value;
                                setContent({ ...content, practiceAreas: newAreas });
                              }}
                              className="w-full bg-[#0B1727] border border-[#B6955B]/20 rounded-lg px-3 py-1.5 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-300 mb-1">توضیح مختصر کارت</label>
                            <input
                              type="text"
                              value={area.shortDesc}
                              onChange={(e) => {
                                const newAreas = [...content.practiceAreas];
                                newAreas[idx].shortDesc = e.target.value;
                                setContent({ ...content, practiceAreas: newAreas });
                              }}
                              className="w-full bg-[#0B1727] border border-[#B6955B]/20 rounded-lg px-3 py-1.5 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">توضیح کامل (در پنجره مشاهده جزئیات)</label>
                          <textarea
                            rows={2}
                            value={area.fullDescription}
                            onChange={(e) => {
                              const newAreas = [...content.practiceAreas];
                              newAreas[idx].fullDescription = e.target.value;
                              setContent({ ...content, practiceAreas: newAreas });
                            }}
                            className="w-full bg-[#0B1727] border border-[#B6955B]/20 rounded-lg px-3 py-1.5 text-white resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">خدمات کلیدی این حوزه (هر خط یک خدمت):</label>
                          <textarea
                            rows={3}
                            value={area.keyServices.join('\n')}
                            onChange={(e) => {
                              const newAreas = [...content.practiceAreas];
                              newAreas[idx].keyServices = e.target.value.split('\n').filter((s) => s.trim().length > 0);
                              setContent({ ...content, practiceAreas: newAreas });
                            }}
                            className="w-full bg-[#0B1727] border border-[#B6955B]/20 rounded-lg px-3 py-1.5 text-white font-sans text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: About & Bio */}
              {adminActiveTab === 'about' && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">متن تحصیلات و رزومه کوتاه وکیل</label>
                    <textarea
                      rows={3}
                      value={content.aboutBio}
                      onChange={(e) => setContent({ ...content, aboutBio: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">اصول و رویکرد حرفه‌ای در پذیرش پرونده‌ها</label>
                    <textarea
                      rows={4}
                      value={content.aboutPhilosophy}
                      onChange={(e) => setContent({ ...content, aboutPhilosophy: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Tab 4: Contact & Footer */}
              {adminActiveTab === 'contact' && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">آدرس کامل دفتر</label>
                    <textarea
                      rows={2}
                      value={content.address}
                      onChange={(e) => setContent({ ...content, address: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">عنوان فرعی دفتر (زیر آدرس)</label>
                    <input
                      type="text"
                      value={content.officeSubTitle}
                      onChange={(e) => setContent({ ...content, officeSubTitle: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">شماره تلفن همراه</label>
                      <input
                        type="text"
                        dir="ltr"
                        value={content.phone}
                        onChange={(e) => setContent({ ...content, phone: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] text-left"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">آیدی تلگرام</label>
                      <input
                        type="text"
                        dir="ltr"
                        value={content.telegram}
                        onChange={(e) => setContent({ ...content, telegram: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] text-left"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">آیدی اینستاگرام</label>
                      <input
                        type="text"
                        dir="ltr"
                        value={content.instagram}
                        onChange={(e) => setContent({ ...content, instagram: e.target.value })}
                        className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">متن سلب مسئولیت در پایین‌ترین نوار فوتر</label>
                    <textarea
                      rows={2}
                      value={content.disclaimer}
                      onChange={(e) => setContent({ ...content, disclaimer: e.target.value })}
                      className="w-full bg-[#08101a] border border-[#B6955B]/30 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#B6955B] resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Tab 5: Client Inquiries Inbox (Private to Admin) */}
              {adminActiveTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="bg-[#B6955B]/10 border border-[#B6955B]/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-white text-sm flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[#B6955B]" />
                        <span>صندوق محرمانه پیام‌ها و درخواست‌های موکلین</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        این درخواست‌ها فقط در این پنل به شما نمایش داده می‌شوند و به هیچ عنوان برای عموم کاربران در سایت قابل مشاهده نیستند.
                      </p>
                    </div>

                    {inquiries.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearAllInquiries}
                        className="text-xs text-red-400 hover:text-red-300 border border-red-500/30 hover:bg-red-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer self-start sm:self-center"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>پاک‌سازی همه پیام‌ها</span>
                      </button>
                    )}
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="p-8 text-center bg-[#08101a] border border-[#B6955B]/20 rounded-xl space-y-2">
                      <Inbox className="w-10 h-10 text-slate-500 mx-auto" />
                      <p className="font-bold text-slate-300 text-sm">هنوز پیامی ثبت نشده است</p>
                      <p className="text-xs text-slate-400">
                        به محض اینکه کاربری فرم تماس یا مشاوره را در سایت ثبت کند، مشخصات و شماره همراه موکل به صورت محرمانه در اینجا نمایش داده خواهد شد.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="p-4 bg-[#08101a] border border-[#B6955B]/30 rounded-xl space-y-3 relative hover:border-[#B6955B] transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-[#B6955B]/20 flex items-center justify-center text-[#B6955B] text-xs font-bold">
                                <User className="w-4 h-4" />
                              </div>
                              <span className="font-bold text-white text-sm">{inq.name}</span>
                              <span className="bg-[#B6955B]/20 border border-[#B6955B]/40 text-[#B6955B] text-[11px] px-2 py-0.5 rounded-full font-medium">
                                {inq.subject}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-slate-500" />
                                <span>{inq.createdAt}</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => handleDeleteInquiry(inq.id)}
                                className="text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                                title="حذف این پیام"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 text-slate-200">
                              <span className="text-slate-400">شماره تماس:</span>
                              <span className="font-bold text-white dir-ltr">{inq.phone}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <a
                                href={`tel:${inq.phone.replace(/[^\d+]/g, '')}`}
                                className="bg-[#B6955B]/20 hover:bg-[#B6955B] text-[#B6955B] hover:text-[#0B1727] px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>تماس مستقیم</span>
                              </a>
                              <a
                                href={`https://t.me/+98${inq.phone.replace(/^0/, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#229ED9]/20 hover:bg-[#229ED9] text-[#229ED9] hover:text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
                              >
                                <TelegramIcon className="w-3.5 h-3.5" />
                                <span>تلگرام</span>
                              </a>
                              <button
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText(inq.phone);
                                  alert(`شماره ${inq.phone} کپی شد.`);
                                }}
                                className="border border-slate-700 hover:border-slate-500 text-slate-300 px-2 py-1 rounded-lg text-xs transition-colors cursor-pointer"
                              >
                                کپی شماره
                              </button>
                            </div>
                          </div>

                          <div className="bg-[#0B1727]/80 rounded-lg p-3 text-xs text-slate-300 leading-relaxed border border-white/5">
                            <span className="text-slate-400 font-semibold block mb-1">شرح پرونده / پیام موکل:</span>
                            {inq.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 6: Domain & Hosting Deployment Guide */}
              {adminActiveTab === 'domain' && (
                <div className="space-y-6">
                  {/* Banner */}
                  <div className="bg-gradient-to-r from-[#B6955B]/20 via-[#0B1727] to-[#0B1727] border border-[#B6955B]/40 rounded-2xl p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#B6955B]/20 border border-[#B6955B]/50 flex items-center justify-center text-[#B6955B] shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">
                          راهنمای جامع اتصال به دامنه اختصاصی (مثل sattarzadeh.ir یا sattarzadehamini.com)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          این وب‌سایت کاملاً بهینه و سبک طراحی شده است و می‌توانید آن را روی هر هاست، سرور یا پلتفرم ابری دلخواه خود با دامنه اختصاصی منتشر کنید.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Backup & Export */}
                  <div className="bg-white/5 border border-[#B6955B]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#B6955B]" />
                        <h5 className="font-bold text-white text-sm">دانلود داده‌ها و پشتیبان‌گیری از تنظیمات</h5>
                      </div>
                      <span className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        آماده خروجی
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      تمامی ویرایش‌ها و متونی که در این پنل مدیریت ثبت کرده‌اید را می‌توانید با یک کلیک به عنوان فایل پشتیبان ذخیره فرمایید:
                    </p>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={handleExportBackup}
                        className="bg-[#B6955B] hover:bg-[#a3844d] text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>دانلود فایل پشتیبان (JSON)</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyBackup}
                        className="border border-[#B6955B]/40 hover:bg-[#B6955B]/10 text-[#B6955B] px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedBackup ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBackup ? 'کپی شد!' : 'کپی کل تنظیمات در کلیپ‌بورد'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Section 2: Hosting Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Option A: cPanel / DirectAdmin */}
                    <div className="bg-[#08101a] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <Server className="w-4 h-4 text-[#B6955B]" />
                        <span>روش ۱: هاست شخصی (سی‌پنل یا دایرکت‌ادمین)</span>
                      </div>
                      <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed pr-1">
                        <li>دستور ساخت نسخه نهایی: <code className="bg-white/10 text-[#B6955B] px-1.5 py-0.5 rounded dir-ltr">npm run build</code></li>
                        <li>پوشه خروجی به نام <code className="bg-white/10 text-white px-1.5 py-0.5 rounded dir-ltr">dist</code> در پروژه ساخته می‌شود.</li>
                        <li>وارد پنل هاست خود (cPanel یا DirectAdmin) شده و به بخش <strong>File Manager</strong> بروید.</li>
                        <li>وارد پوشه <strong>public_html</strong> شوید و تمام فایل‌های داخل پوشه <code className="text-white dir-ltr">dist</code> را در آنجا آپلود و استخراج نمایید.</li>
                        <li>سایت بلافاصله با آدرس دامنه شما باز خواهد شد!</li>
                      </ol>
                    </div>

                    {/* Option B: Modern Cloud / Jamstack */}
                    <div className="bg-[#08101a] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <Globe className="w-4 h-4 text-[#B6955B]" />
                        <span>روش ۲: پلتفرم‌های ابری (لیارا، Vercel، Cloudflare)</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#B6955B] font-bold">•</span>
                          <span><strong>سرویس ایرانی لیارا (Liara.ir):</strong> استقرار ساده استاتیک با سرعت سرور داخلی ایران و اتصال بدون دردسر دامنه <code className="text-white dir-ltr">.ir</code>.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#B6955B] font-bold">•</span>
                          <span><strong>سرویس Cloudflare Pages:</strong> رایگان، دارای CDN جهانی و محافظت DDoS و اتصال مستقیم با چند کلیک.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#B6955B] font-bold">•</span>
                          <span><strong>گواهی امنیتی SSL رایگان (HTTPS):</strong> هر دو روش به طور خودکار قفل سبز امنیتی را فعال می‌کنند.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 3: Domain DNS Setup */}
                  <div className="bg-white/5 border border-[#B6955B]/20 rounded-2xl p-4 sm:p-5 space-y-3">
                    <h5 className="font-bold text-white text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#B6955B]" />
                      <span>تنظیمات دامنه ملی (.ir) و بین‌المللی (.com)</span>
                    </h5>
                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      <p>
                        برای اتصال دامنه خریداری‌شده به هاست، دو مرحله ساده دارید:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="bg-[#0B1727] p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="font-bold text-white block">مرحله اول: تنظیم NameServer (NS)</span>
                          <span className="text-slate-400 block text-[11px]">
                            در سایت <strong>nic.ir</strong> (برای دامنه‌های .ir) یا کنترل پنل دامنه بین‌المللی، دی‌ان‌اس‌های ارائه‌شده توسط هاست (مثلاً <code className="text-white dir-ltr">ns1.yourhost.com</code>) را وارد نمایید.
                          </span>
                        </div>
                        <div className="bg-[#0B1727] p-3 rounded-xl border border-white/5 space-y-1">
                          <span className="font-bold text-white block">مرحله دوم: رکوردهای DNS (در صورت استفاده از CDN)</span>
                          <span className="text-slate-400 block text-[11px]">
                            یک رکورد <strong>A</strong> با نام <code className="text-white dir-ltr">@</code> متصل به IP هاست، و یک رکورد <strong>CNAME</strong> با نام <code className="text-white dir-ltr">www</code> ایجاد نمایید.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: SEO Checklist for Law Office */}
                  <div className="bg-[#08101a] border border-[#B6955B]/30 rounded-2xl p-4 sm:p-5 space-y-2">
                    <h5 className="font-bold text-white text-sm flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#B6955B]" />
                      <span>اقدامات پیشنهادی پس از راه‌اندازی دامنه:</span>
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-300">
                      <li className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>ثبت در Google Search Console</span>
                      </li>
                      <li className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>ثبت موقعیت دفتر تبریز در گوگل مپ</span>
                      </li>
                      <li className="bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>قراردادن آدرس سایت در بیو اینستاگرام و تلگرام</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-[#B6955B]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveContent}
                  className="bg-[#B6955B] hover:bg-[#a3844d] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>ذخیره تمامی تغییرات</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetContent}
                  className="border border-slate-600 hover:border-slate-400 text-slate-300 px-3.5 py-2.5 rounded-xl font-medium flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>بازنشانی پیش‌فرض</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsAdminPanelOpen(false)}
                className="text-slate-400 hover:text-white text-xs underline cursor-pointer"
              >
                بستن و مشاهده تغییرات در سایت
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
