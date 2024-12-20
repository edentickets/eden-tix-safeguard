import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqData } from "@/components/faq/faqData";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      qa => 
        qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-eden-dark py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>
        
        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-eden-light/10 border-eden-light/20 text-white placeholder:text-gray-400"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, index) => (
            <div key={index} className="bg-eden-light/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">{category.category}</h2>
              <FAQAccordion items={category.questions} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}