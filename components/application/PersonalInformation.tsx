"use client";

import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  BriefcaseBusiness,
  Heart,
  GraduationCap,
} from "lucide-react";

export type PersonalInformationData = {
  firstName: string;
  lastName: string;
  identityNumber: string;
  birthDate: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  address: string;
  maritalStatus: string;
  education: string;
  occupation: string;
};

type Props = {
  data: PersonalInformationData;
  onChange: (
    field: keyof PersonalInformationData,
    value: string
  ) => void;
};

const educationLevels = [
  "İlkokul",
  "Ortaokul",
  "Lise",
  "Önlisans",
  "Lisans",
  "Yüksek Lisans",
  "Doktora",
];

const maritalStatus = [
  "Bekar",
  "Evli",
  "Boşanmış",
];

export default function PersonalInformation({
  data,
  onChange,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
      className="rounded-[35px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
    >
      <div className="mb-10">

        <h2 className="text-3xl font-black text-white">

          Kişisel Bilgiler

        </h2>

        <p className="mt-3 text-slate-400">

          Kimlik ve iletişim bilgilerinizi eksiksiz doldurunuz.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <InputField
         icon={User}
         label="Ad"
         value={data.firstName}
         onChange={(v)=>onChange("firstName",v)}
        />

        <InputField
         icon={User}
         label="Soyad"
         value={data.lastName}
         onChange={(v)=>onChange("lastName",v)}
        />

        <InputField
          icon={User}
          label="TC Kimlik No"
          value={data.identityNumber}
          maxLength={11}
          onChange={(v)=>onChange("identityNumber",v)}
        />

        <InputField
          icon={Phone}
          label="Telefon"
          value={data.phone}
          onChange={(v)=>onChange("phone",v)}
        />

        <InputField
          icon={Mail}
          label="E-Posta"
          value={data.email}
          onChange={(v)=>onChange("email",v)}
        />

        <InputField
          icon={Calendar}
          label="Doğum Tarihi"
          type="date"
          value={data.birthDate}
          onChange={(v)=>onChange("birthDate",v)}
        />

        <InputField
          icon={BriefcaseBusiness}
          label="Meslek"
          value={data.occupation}
          onChange={(v)=>onChange("occupation",v)}
        />
                <SelectField
          icon={GraduationCap}
          label="Eğitim Durumu"
          value={data.education}
          options={educationLevels}
          onChange={(v)=>onChange("education",v)}
        />

        <SelectField
          icon={Heart}
          label="Medeni Durum"
          value={data.maritalStatus}
          options={maritalStatus}
          onChange={(v)=>onChange("maritalStatus",v)}
        />

        <InputField
          icon={MapPin}
          label="İl"
          value={data.city}
          onChange={(v)=>onChange("city",v)}
        />

        <InputField
          icon={MapPin}
          label="İlçe"
          value={data.district}
          onChange={(v)=>onChange("district",v)}
        />

      </div>

      <div className="mt-8">

        <label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">

          <MapPin
            size={18}
            className="text-cyan-300"
          />

          Açık Adres

        </label>

        <textarea

          rows={5}

          value={data.address}

          onChange={(e)=>
            onChange(
              "address",
              e.target.value
            )
          }

          placeholder="Mahalle, Cadde, Sokak, Apartman No..."

          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"

        />

      </div>

    </motion.section>
);
}
function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  type = "text",
  maxLength,
}:{
  icon:any;
  label:string;
  value:string;
  onChange:(value:string)=>void;
  type?:string;
  maxLength?:number;
}){

return(

<div>

<label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">

<Icon
size={18}
className="text-cyan-300"
/>

{label}

</label>

<input

type={type}

value={value}

maxLength={maxLength}

onChange={(e)=>onChange(e.target.value)}

className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"

/>

</div>

);

}
function SelectField({
  icon: Icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: any;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">

        <Icon
          size={18}
          className="text-cyan-300"
        />

        {label}

      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            appearance-none
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-4
            pr-12
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/10
            hover:border-cyan-400/40
            [&_option]:bg-[#081321]
          "
        >

          <option value="">

            Seçiniz

          </option>

          {options.map((option) => (

            <option
              key={option}
              value={option}
            >

              {option}

            </option>

          ))}

        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />

        </svg>

      </div>

    </div>
  );
}