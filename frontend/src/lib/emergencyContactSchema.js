import { z } from "zod";

const clean = text => text.replace(/[<>()]/g, "");

const emergencyContactSchema = z.object({

    contactName: z.string()
        .min(4, "Minimum 4 characters")
        .max(30, "Maximum 30 characters")
        .trim()
        .regex(/^[a-zA-Z .]+$/, "Please enter only alphabets")
        .transform(clean),

    email: z.string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email")
        .transform(clean),

    phone: z.string()
        .trim()
        .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),

    relationship: z.enum(["Family", "Friend", "Guardian", "Other"], {
        message: "Please select a valid relationship",
    }),

});

export default emergencyContactSchema;