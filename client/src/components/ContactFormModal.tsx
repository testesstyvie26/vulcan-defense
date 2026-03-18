import { useState } from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function ContactFormModal({
  isOpen,
  onClose,
  title = "Solicitar Diagnóstico",
  subtitle = "Preencha o formulário abaixo e entraremos em contato em breve.",
}: ContactFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-card border border-border rounded-lg shadow-2xl shadow-blue-500/20 animate-in fade-in zoom-in-95 duration-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <ContactForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
