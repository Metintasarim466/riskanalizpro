import { z } from "zod";

export const applicationSchema = z.object({
  firstName: z
    .string()
    .min(2, "Ad en az 2 karakter olmalıdır."),

  lastName: z
    .string()
    .min(2, "Soyad en az 2 karakter olmalıdır."),

  tcIdentity: z
    .string()
    .length(11, "TC Kimlik No 11 haneli olmalıdır.")
    .regex(/^[0-9]+$/, "Sadece rakam giriniz."),

  birthDate: z
    .string()
    .min(1, "Doğum tarihi zorunludur."),

  phone: z
    .string()
    .min(10, "Telefon numarası zorunludur."),

  email: z
    .string()
    .email("Geçerli bir e-posta adresi giriniz."),

  city: z
    .string()
    .min(2, "İl seçiniz."),

  district: z
    .string()
    .min(2, "İlçe seçiniz."),

  employmentStatus: z
    .string()
    .min(2, "Çalışma durumu seçiniz."),

  profession: z
    .string()
    .min(2, "Meslek bilgisi zorunludur."),

  company: z.string().optional(),

  monthlyIncome: z.coerce
    .number()
    .min(0, "Gelir bilgisi giriniz."),

  additionalIncome: z.coerce.number(),

  existingLoan: z.coerce.number(),

  creditCardDebt: z.coerce.number(),

  requestedCreditType: z
    .string()
    .min(2, "Kredi türünü seçiniz."),

  requestedCreditAmount: z.coerce
    .number()
    .min(1000, "Kredi tutarı giriniz."),

  description: z.string().optional(),

  kvkk: z.literal(true, {
    errorMap: () => ({
      message: "KVKK onayını kabul etmelisiniz.",
    }),
  }),

  agreement: z.literal(true, {
    errorMap: () => ({
      message: "Açık rıza onayını kabul etmelisiniz.",
    }),
  }),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;