'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Nunito } from 'next/font/google'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

// Initialize EmailJS with your public key
emailjs.init("9iVSht9ytgpTJxbUO") // Replace with your actual public key from EmailJS dashboard

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
})

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'ja', name: '日本語' },
  { code: 'ar', name: 'العربية' }
]

const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia']

const serviceCategories = ['Sonic Branding', 'Music for Advertising', 'Original Compositions', 'Voice-over Production', 'Music Licensing', 'Audio Post-Production']

export default function ContactForm() {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    region: '',
    serviceCategory: '',
    description: ''
  })

  const changeLanguage = useCallback(async (language: string) => {
    await i18n.changeLanguage(language)
    localStorage.setItem('i18nextLng', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n])

  useEffect(() => {
    const initLanguage = async () => {
      const savedLang = localStorage.getItem('i18nextLng')
      const supportedLanguages = ['en', 'fr', 'es', 'de', 'it', 'nl', 'pl', 'ja', 'ar']
      if (savedLang && supportedLanguages.includes(savedLang)) {
        await changeLanguage(savedLang)
      }
      setMounted(true)
    }
    initLanguage()
  }, [changeLanguage])

  // Prevent hydration mismatch by not rendering translations until mounted
  if (!mounted) {
    return (
      <section className={`${nunito.className} text-white py-20 px-4 md:px-8 lg:px-16 min-h-screen md:py-32`}>
        <div className="max-w-7xl mx-auto mt-8 sm:mt-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-2">Get in touch with the team</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s make your brand <span className="text-[#fa4c38]">Toned</span>.
            </h1>
          </div>
          {/* Loading state */}
        </div>
      </section>
    )
  }

  const currentLanguage = i18n.language || 'en'
  const isRTL = currentLanguage === 'ar'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev =>  ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const templateParams = {
        from_email: formData.email,
        to_email: 'azero853@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        website: formData.website,
        region: formData.region,
        service_category: formData.serviceCategory,
        message: formData.description
      }

      await emailjs.send(
        'service_qdfh17t',     // Replace with your actual service ID
        'template_kvm65eh',    // Replace with your actual template ID
        templateParams
      )

      toast.success(t('emailSent') || 'Email sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        region: '',
        serviceCategory: '',
        description: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error(t('emailError') || 'Error sending email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`${nunito.className} text-white py-20 px-4 md:px-8 lg:px-16 min-h-screen md:py-32 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold mb-2">{t('getInTouch')}</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('letsMakeYourBrand')} <span className="text-[#fa4c38]">{t('toned')}</span>.
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/4"
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{t('languages')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {languages.map((language, index) => (
                    <motion.li
                      key={language.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`cursor-pointer transition-colors duration-200 ${
                        currentLanguage === language.code ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => changeLanguage(language.code)}
                      dir={language.code === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {language.name}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-3/4"
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-white mb-1">{t('firstName')}*</label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-white mb-1">{t('lastName')}*</label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white mb-1">{t('businessEmail')}*</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-white text-sm mb-1">{t('companyWebsite')}*</label>
                    <Input 
                      id="website" 
                      value={formData.website}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-white text-sm mb-1">{t('region')}*</label>
                    <Select 
                      value={formData.region} 
                      onValueChange={(value) => handleSelectChange('region', value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder={t('selectRegion')} />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region.toLowerCase()}>{t(region.toLowerCase())}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm text-white mb-1">{t('serviceCategory')}</label>
                    <Select 
                      value={formData.serviceCategory}
                      onValueChange={(value) => handleSelectChange('serviceCategory', value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder={t('selectServiceCategory')} />
                      </SelectTrigger>
                      <SelectContent className='z-[20] bg-gray-800 absolute'>
                        {serviceCategories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>{t(category.toLowerCase())}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm text-white mb-1">{t('describeYourNeed')}*</label>
                    <Textarea 
                      id="description" 
                      value={formData.description}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white" 
                      rows={4} 
                      required 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-[#fa4c38] hover:bg-[#FF7C30] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                    disabled={loading}
                  >
                    {loading ? t('sending') || 'Sending...' : t('submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}