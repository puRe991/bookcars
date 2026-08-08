import { z } from 'zod'
import { strings as commonStrings } from '@/lang/common'

// const numberRegex = /^\d+(\.\d+)?$/
const numberRegex = /^\d+$/

const validateHour = (val: string) => {
  const hour = parseFloat(val)
  return Number.isFinite(hour) && hour >= 0 && hour <= 23
}

const validateVatRate = (val: string) => {
  const rate = parseFloat(val)
  return Number.isFinite(rate) && rate >= 0 && rate <= 100
}

export const schema = z.object({
  minPickupHours: z.string().refine((val) => !val || (numberRegex.test(val) && Number.parseFloat(val) >= 1), { message: commonStrings.FIELD_NOT_VALID }),
  minRentalHours: z.string().refine((val) => !val || (numberRegex.test(val) && Number.parseFloat(val) >= 1), { message: commonStrings.FIELD_NOT_VALID }),
  minPickupDropoffHour: z.string().refine((val) => !val || (numberRegex.test(val) && validateHour(val)), { message: commonStrings.FIELD_NOT_VALID }),
  maxPickupDropoffHour: z.string().refine((val) => !val || (numberRegex.test(val) && validateHour(val)), { message: commonStrings.FIELD_NOT_VALID }),
  vatRate: z.string().refine((val) => !val || validateVatRate(val), { message: commonStrings.FIELD_NOT_VALID }),
  invoiceIssuer: z.string(),
  invoiceNumberPrefix: z.string().refine((val) => !val || /^[A-Za-z0-9-]{1,10}$/.test(val), { message: commonStrings.FIELD_NOT_VALID }),
})

export type FormFields = z.infer<typeof schema>
