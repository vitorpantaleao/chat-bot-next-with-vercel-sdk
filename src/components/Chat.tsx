'use client'

import { useChat } from "ai/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"

export interface ChatProps {}

export function Chat(props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })
    return (
        <Card className="w-[440px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[600px] w-full pb-5 pr-4">
                {messages.map(mensagem => {
                    return (
                        <div key={mensagem.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                            {mensagem.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>VH</AvatarFallback>
                                    <AvatarImage src="https://github.com/vitorpantaleao.png" />
                                </Avatar>
                            )}
                            {mensagem.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>AI</AvatarFallback>
                                    <AvatarImage src="https://github.com/rafaalmeida1.png" />
                                </Avatar>
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">
                                    {mensagem.role === 'user' ? 'Usuário' : 'AI'}:
                                </span>
                                {mensagem.content}
                            </p>
                        </div>

                    )
                })}
            </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
              <Input placeholder="Type a message..." value={input} onChange={handleInputChange} />
              <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    )
}