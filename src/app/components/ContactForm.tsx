import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// EmailJS Configuration
// To use this form, you need to:
// 1. Sign up at emailjs.com (free tier: 200 emails/month)
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the IDs below with your own from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key

// Flag to enable/disable EmailJS (set to false if not configured)
const EMAIL_JS_ENABLED = false; // Set to true after configuring EmailJS

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    if (EMAIL_JS_ENABLED && formRef.current) {
      try {
        // Send email using EmailJS
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );

        // Show success message
        toast.success('Message sent successfully!', {
          description: "I'll get back to you as soon as possible.",
          duration: 5000,
        });

        setIsSubmitted(true);
        reset();

        // Reset submitted state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message', {
          description: 'Please try again or email me directly.',
          duration: 5000,
        });
      }
    } else {
      // Mock submission (when EmailJS is not configured)
      console.log('Form Data:', data);
      
      toast.info('Demo Mode', {
        description: 'EmailJS not configured. To enable: Sign up at emailjs.com and update ContactForm.tsx',
        duration: 7000,
      });

      // Show a different message for demo
      setTimeout(() => {
        toast.success('Message received (Demo)', {
          description: "Note: This is a demo. Configure EmailJS to enable real emails.",
          duration: 5000,
        });
      }, 1000);

      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto mt-8 sm:mt-10 lg:mt-12 bg-white/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-gray-200 shadow-xl"
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-center">Send a Message</h3>

      {/* Name Field */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { 
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base`}
          placeholder={t('contact.namePlaceholder')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs sm:text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base`}
          placeholder={t('contact.emailPlaceholder')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs sm:text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div className="mb-4 sm:mb-5">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject', {
            required: 'Subject is required',
            minLength: { value: 5, message: 'Subject must be at least 5 characters' }
          })}
          className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base`}
          placeholder={t('contact.subjectPlaceholder')}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs sm:text-sm text-red-600" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="mb-5 sm:mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
          className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none text-sm sm:text-base`}
          placeholder={t('contact.messagePlaceholder')}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs sm:text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-3 sm:py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
          isSubmitted
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
        } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
        aria-live="polite"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Sent!
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 text-center">
        Your information will be kept private and secure
      </p>

      {!EMAIL_JS_ENABLED && (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-amber-900">
              <strong>Demo Mode:</strong> Form submissions are not being sent via email. 
              To enable real emails, configure EmailJS in <code className="bg-amber-100 px-1 rounded">ContactForm.tsx</code>
            </p>
            <p className="text-xs text-amber-700 mt-1">
              Or contact me directly at: <a href="mailto:arsham.kz770@gmail.com" className="underline font-semibold">arsham.kz770@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </motion.form>
  );
}