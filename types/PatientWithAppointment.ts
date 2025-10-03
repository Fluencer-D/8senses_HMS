
export interface AppointmentDetails {
  _id: string
  id: string
  date: string
  startTime: string
  endTime: string
  patientName: string
  patientId: {
    _id: string
    fullName?: string
    childName?: string
    parentInfo?: {
      name: string
      phone: string
      email: string
    }
  }
  therapistId: {
    _id: string
    fullName: string
  }
  serviceId: {
    name: string
    price: number
  }
  type: "initial assessment" | "therapy session" | "follow-up" | "other" | "group therapy session"
  status: "scheduled" | "completed" | "cancelled" | "no-show" | "rescheduled" | "confirmed"
  consultationMode: "in-person" | "video-call" | "phone"
  payment: {
    amount: number
    status: "pending" | "paid" | "refunded"
    method: "cash" | "card" | "insurance" | "not_specified" | "upi"
    paidAmount?: number
  }
  totalSessions: number
  sessionsCompleted: number
  sessionsPaid: number
  phone: string
  email: string
  notes?: string
  whatsappContact?: string
  whatsappContactType?: "father" | "mother"
  createdAt: string
  updatedAt: string
  isGroupSession?: boolean
}

export interface PatientWithAppointments {
  _id: string
  firstName?: string
  lastName?: string
  fullName?: string
  childName?: string
  dateOfBirth?: string
  childDOB?: string
  gender?: string
  childGender?: string
  // Added photo and birth certificate fields
  photo?: {
    url: string
    public_id: string
  } | null
  birthCertificate?: {
    url: string
    public_id: string
  } | null
  // NEW FIELDS - Child Symptoms and Notes
  childSymptoms?: string[]
  notes?: string
  // WhatsApp Contact Information
  whatsappContact?: string
  whatsappContactType?: "father" | "mother"
  parentInfo?: {
    name: string
    phone: string
    email: string
    relationship?: string
    address?: string
    motherName?: string
    motherphone?: string
  }
  parentName?: string
  contactNumber?: string
  email?: string
  appointments: AppointmentDetails[]
  totalAppointments: number
  completedAppointments: number
  pendingPayments: number
  totalOwed: number
  totalPaid: number
  status?: string
  createdAt: string
  updatedAt: string
}