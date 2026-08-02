import { z } from "zod";

export const applicationSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır."),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır."),
  identityNumber: z
    .string()
    .length(11, "TC Kimlik Numarası 11 haneli olmalıdır."),
  birthDate: z.string().min(1, "Doğum tarihi zorunludur."),
  phone: z.string().min(10, "Telefon numarası zorunludur."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  city: z.string().min(2, "Şehir zorunludur."),
  district: z.string().min(2, "İlçe zorunludur."),
  address: z.string().min(5, "Adres zorunludur."),
  maritalStatus: z.string().min(1, "Medeni durum seçiniz."),
  education: z.string().min(1, "Eğitim durumu seçiniz."),
  occupation: z.string().min(2, "Meslek zorunludur."),

  monthlyIncome: z.number().min(0),
  monthlyExpense: z.number().min(0),
  totalDebt: z.number().min(0),
  creditCardDebt: z.number().min(0),
  creditScore: z.number().min(0).max(1900),
  requestedCredit: z.number().min(1),
  installment: z.number().min(1),
  workStatus: z.string().min(1),
  homeStatus: z.string().min(1),
  selectedBank: z.string().min(1),

  description: z.string().optional(),

  kvkk: z.boolean().refine((val) => val === true, {
    message: "KVKK onayını kabul etmelisiniz.",
  }),

  agreement: z.boolean().refine((val) => val === true, {
    message: "Sözleşmeyi kabul etmelisiniz.",
  }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;