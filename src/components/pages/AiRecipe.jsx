import React, { useEffect, useRef, useState } from "react";

const AiRecipe = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [aiReady, setAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef();

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter && window.puter.ai) {
        setAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);
    return () => clearInterval(checkReady);
  }, []);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(scrollToBottom, [messages]);

  // Add message
  const addMessage = (msg, isUser) => {
    setMessages((prev) => [
      ...prev,
      {
        content: msg,
        isUser,
        id: Date.now() + Math.random(),
      },
    ]);
  };

  // Send message
  const sendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    if (!aiReady) {
      addMessage("AI is not ready. Please try again later.", false);
      return;
    }

    addMessage(userMessage, true);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await window.puter.ai.chat(userMessage);
      const reply =
        typeof response === "string"
          ? response
          : response.message?.content || "No reply received.";
      addMessage(reply, false);
    } catch (error) {
      addMessage(`Error: ${error.message || "Something went wrong."}`, false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen max-w-6xl m-auto p-3">
      <div className="flex flex-col shadow-sm min-h-[80vh] md:min-h-[90vh] p-3 rounded-2xl bg-neutral-50 border-neutral-200 border items-center gap-5">
        <div className="w-full flex  justify-center items-center pb-3 gap-3 border-b border-neutral-200">
          <h1 className="text-2xl md:text-xl font-medium tracking-tight animate-fade-in-up text-center font-display flex-1">
            Chefy AI
          </h1>
          <div
            className={`px-4 py-1.5 rounded-full text-xs w-fit  ${
              aiReady
                ? "bg-green-500/20 text-green-600"
                : "bg-orange-500/20 text-orange-600"
            }`}
          >
            {aiReady ? "AI Ready" : "Waiting for AI"}
          </div>
        </div>
        <div className=" flex-1 w-full px-4 text-center">
          <p className="bg-neutral-200/30 w-fit ml-auto text-right border border-neutral-100 shadow-neutral-400 shadow-xs rounded-2xl px-5 py-1 text-sm">
            Ask Your Fav recipe
          </p>
          {messages.length === 0 && <div>Ask Your Fav recipe</div>}
          {messages.map((msg) => {
            console.log(msg.content);
            <div
              key={msg.id}
              className={`p-3 m-2 rounded-2xl max-w-xs text-wrap ${
                msg.isUser
                  ? "bg-neutral-400/30 w-fit ml-auto text-right border border-neutral-200 shadow-neutral-400 shadow-sm rounded-2xl px-5 py-1 text-sm"
                  : "bg-neutral-200/30 w-fit ml-auto text-right border border-neutral-100 shadow-neutral-400 shadow-xs rounded-2xl px-5 py-1 text-sm"
              }`}
            >
              <div className="whitespace-pre-wrap ">{msg.content}</div>
            </div>;
          })}
          {isLoading && (
            <div className="p-3 m-2 rounded-2xl max-w-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-black/30 border-t-black  rounded-full">
                  Thinking....
                </div>
              </div>
            </div>
          )}
          <div ref={messageEndRef}></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={
              aiReady ? "Type Your Recipe" : "Wait for ai to be ready"
            }
            disabled={!aiReady || isLoading}
          />
          <button
            onClick={sendMessage}
            className={`cursor-pointer hover:scale-95 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium  shadow-neutral-300 shadow-md  border-neutral-300 border `}
            disabled={!aiReady || isLoading || !inputValue.trim()}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-black/30 border-t-black  rounded-full">
                  Sending
                </div>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiRecipe;
