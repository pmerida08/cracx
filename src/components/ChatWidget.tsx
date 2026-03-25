import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { clsx } from "clsx";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://n8n-pmv-playground.up.railway.app/webhook/cracx-chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMsg, sessionId }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const textData = await response.text();
      let botResponse = textData;

      try {
        const data = JSON.parse(textData);
        botResponse =
          data.output ||
          data.response ||
          data.text ||
          data.message ||
          (typeof data === "string" ? data : JSON.stringify(data));
      } catch (e) {
        // Si no es JSON válido, usamos el texto plano original (textData)
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("Error enviando mensaje al chatbot:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Lo siento, ha ocurrido un error de conexión con el asistente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className={clsx(
          "bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-transform transform hover:scale-110",
          isOpen ? "scale-0 hidden" : "scale-100",
        )}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Ventana de chat */}
      <div
        className={clsx(
          "bg-white w-[350px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-100px)] rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right absolute bottom-16 right-0",
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none",
        )}
      >
        {/* Cabecera */}
        <div className="bg-gray-950 text-white px-5 py-4 flex justify-between items-center rounded-t-3xl border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-pink-500 flex items-center justify-center font-bold text-sm">
              C
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                Asistente CRACX
              </h3>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>{" "}
                En línea
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Cerrar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-8 px-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-gray-400" />
              </div>
              <p className="font-medium text-gray-900 mb-1">¡Hola!</p>
              <p>
                Soy el asistente virtual de CRACX. ¿En qué puedo ayudarte hoy?
              </p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={clsx(
                  "max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm",
                  msg.role === "user"
                    ? "bg-gray-900 text-white rounded-tr-sm"
                    : "bg-white border border-gray-100 text-gray-800 rounded-tl-sm",
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 text-gray-500 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs font-medium">Pensando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className="p-3 bg-white border-t border-gray-100"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-1.5 p-2 bg-gray-900 text-white rounded-full disabled:opacity-50 disabled:bg-gray-300 transition-colors hover:bg-gray-800"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
