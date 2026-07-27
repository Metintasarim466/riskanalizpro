export interface PersonalInformationData {
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
}

export interface FinancialInformationData {
  monthlyIncome: number;
  monthlyExpense: number;
  totalDebt: number;
  creditCardDebt: number;
  requestedCredit: number;
  installment: number;
  workStatus: string;
  homeStatus: string;
  selectedBank: string;
}

export interface ApplicationData {
  personal: PersonalInformationData;
  financial: FinancialInformationData;

  description: string;

  kvkk: boolean;
  agreement: boolean;
}