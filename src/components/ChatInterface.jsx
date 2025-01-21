import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2, User, Bot, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const simulateResponse = async (message) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const responses = {
    hello: "Hi there! How can I help you today?",
    "how are you": "I'm functioning well, thank you! How can I assist you?",
    "what time": `The current time is ${new Date().toLocaleTimeString()}`,
    code: "Here's an example code:\n```python\ndef hello_world():\n    print('Hello, World!')\n```",
    list: "Here's a list:\n1. First item\n2. Second item\n3. Third item",
  };
  const matchingKey = Object.keys(responses).find((key) =>
    message.toLowerCase().includes(key)
  );
  return matchingKey
    ? responses[matchingKey]
    : "I understand. How can I help you further?";
};

const ChatMessage = ({ message }) => {
  return (
    <div
      className={`flex items-start space-x-3 ${message.role === "user" ? "justify-end" : "justify-start"} px-4`}
    >
      {message.role === "assistant" && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          {/* <Bot className="w-5 h-5 text-white" /> */}
          <img
            src={
              "https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png"
            }
            // alt={patient.name}
            className="w-5 h-5 text-white"
          />
        </div>
      )}
      <div className="flex flex-col space-y-1 max-w-[85%]">
        <Card
          className={`p-4 ${message.role === "user" ? "bg-primary text-white" : "bg-white border"}`}
        >
          {message.content}
        </Card>
        <span className="text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      {message.role === "user" && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      )}
    </div>
  );
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messages.length &&
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "" || isLoading) return;

    const userMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await simulateResponse(inputMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2">
            <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
            <span>Thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="border-t p-4 flex space-x-4 sticky bottom-0"
      >
        <Textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || inputMessage.trim() === ""}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
