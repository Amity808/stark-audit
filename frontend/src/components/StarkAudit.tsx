import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { useOpenAI } from '@/hooks/useOpenAi';
import { codeExplanationPrompt } from "../prompts/smartContractAudit";
import { Button } from "./ui/button";
interface ChatAuditResponse {
   petName: string;
   explanation: string;
 }

 
const StarkAudit = () => {
 const [audit, setAudit] = useState("")
 const { result, loading, error, generateResponse } = useOpenAI<ChatAuditResponse>()

 const generateAudit = async () => {
   if (!audit.trim()) {
      return
    }

    const prompt = {
      ...codeExplanationPrompt,
      userPrompt: codeExplanationPrompt.userPrompt(audit)
    }


    await generateResponse(prompt)
 }

 const handleAuditChange = (e: ChangeEvent<HTMLInputElement>) => setAudit(e.target.value);


 return (
    <div>
        <div>
         <h2>Stark Audit</h2>
        </div>
        <div>
          <Input value={audit} onChange={handleAuditChange} />
          <Button onClick={generateAudit}>Generate Audit</Button>
        </div>
    </div>
 )
}

export default StarkAudit