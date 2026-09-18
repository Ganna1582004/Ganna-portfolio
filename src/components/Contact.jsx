import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const Contact = () => {
  const { t, isAr } = useThemeLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.form.errorTitle);
      return;
    }

    setIsSubmitting(true);
    // Simulate async message dispatch with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Outreach */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-md shadow-violet-600/20 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {t.contact.emailLabel}
                    </div>
                    <a
                      href={`mailto:${t.personal.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all"
                    >
                      {t.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 flex items-center gap-1 shrink-0 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">{t.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-violet-400 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {t.contact.phoneLabel}
                    </div>
                    <a
                      href={`tel:${t.personal.phoneClean}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-mono"
                    >
                      {t.personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${t.personal.phoneClean.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.contact.locationLabel}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {t.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status Badge */}
            <div className="p-4 rounded-2xl bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {t.personal.status}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl">
              
              {submitted ? (
                /* Success State Feedback */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    {t.contact.form.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-md transition-all"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.form.subjectLabel}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.form.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{t.contact.form.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.form.submitBtn}</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
