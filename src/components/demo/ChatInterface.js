'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Paperclip, Smile, MoreVertical, Phone, Video } from 'lucide-react'

export default function ChatInterface({ level, chats, onNewMessage }) {
  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Simulated chat conversations
  const mockChats = [
    {
      id: 1,
      sellerName: 'TechHub Electronics',
      sellerAvatar: 'T',
      lastMessage: 'I can offer the iPhone 15 Pro for $1,149. Includes warranty!',
      timestamp: '2 min ago',
      unread: 2,
      messages: [
        {
          id: 1,
          sender: 'seller',
          content: 'Hi! I saw your request for an iPhone 15 Pro. I have one available.',
          timestamp: '10:30 AM',
          type: 'text'
        },
        {
          id: 2,
          sender: 'seller',
          content: 'It\'s brand new, sealed, with full warranty. I can offer it for $1,149.',
          timestamp: '10:31 AM',
          type: 'text'
        },
        {
          id: 3,
          sender: 'buyer',
          content: 'That sounds good! Can you tell me more about the warranty?',
          timestamp: '10:35 AM',
          type: 'text'
        },
        {
          id: 4,
          sender: 'seller',
          content: 'Full Apple warranty for 1 year, plus I offer 30-day return policy.',
          timestamp: '10:36 AM',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      sellerName: 'Local Electronics Plus',
      sellerAvatar: 'L',
      lastMessage: 'Can we meet today for pickup?',
      timestamp: '5 min ago',
      unread: 1,
      messages: [
        {
          id: 1,
          sender: 'seller',
          content: 'Hello! I have the iPhone 15 Pro you\'re looking for.',
          timestamp: '9:45 AM',
          type: 'text'
        },
        {
          id: 2,
          sender: 'seller',
          content: 'My price is $1,175, but it includes a free case and screen protector.',
          timestamp: '9:46 AM',
          type: 'text'
        },
        {
          id: 3,
          sender: 'buyer',
          content: 'Interesting! Where are you located?',
          timestamp: '9:50 AM',
          type: 'text'
        },
        {
          id: 4,
          sender: 'seller',
          content: 'Brooklyn, near the bridge. Can we meet today for pickup?',
          timestamp: '9:52 AM',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      sellerName: 'Mobile Masters',
      sellerAvatar: 'M',
      lastMessage: 'Typing...',
      timestamp: 'now',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'seller',
          content: 'Hi there! I specialize in iPhones and have exactly what you need.',
          timestamp: '8:20 AM',
          type: 'text'
        },
        {
          id: 2,
          sender: 'buyer',
          content: 'Great! What\'s your best price?',
          timestamp: '8:25 AM',
          type: 'text'
        },
        {
          id: 3,
          sender: 'seller',
          content: 'For you, $1,129. I also do phone repairs if you ever need it.',
          timestamp: '8:26 AM',
          type: 'text'
        }
      ]
    }
  ]

  const [chatList, setChatList] = useState(mockChats)

  useEffect(() => {
    if (chatList.length > 0 && !selectedChat) {
      setSelectedChat(chatList[0])
    }
  }, [chatList, selectedChat])

  useEffect(() => {
    scrollToBottom()
  }, [selectedChat?.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!message.trim() || !selectedChat) return

    const newMessage = {
      id: Date.now(),
      sender: 'buyer',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    }

    // Add message to current chat
    setChatList(prev => 
      prev.map(chat => 
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: message,
              timestamp: 'now'
            }
          : chat
      )
    )

    setMessage('')
    onNewMessage(newMessage)

    // Simulate seller typing and response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      
      const responses = [
        "That's a great question! Let me check on that for you.",
        "Absolutely! I can definitely help with that.",
        "Perfect! I'll get that information for you right away.",
        "Thanks for asking! Here's what I can offer...",
        "I appreciate your interest! Let me provide more details."
      ]
      
      const sellerResponse = {
        id: Date.now() + 1,
        sender: 'seller',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      }

      setChatList(prev => 
        prev.map(chat => 
          chat.id === selectedChat.id
            ? {
                ...chat,
                messages: [...chat.messages, sellerResponse],
                lastMessage: sellerResponse.content,
                timestamp: 'now'
              }
            : chat
        )
      )
    }, 2000 + Math.random() * 3000)
  }

  const currentChat = chatList.find(chat => chat.id === selectedChat?.id)

  return (
    <div className="h-96 flex bg-dark-card rounded-lg overflow-hidden">
      {/* Chat List Sidebar */}
      <div className="w-1/3 border-r border-white/10">
        <div className="p-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">
            Active Conversations
          </h3>
          <p className="text-sm text-gray-400">
            {chatList.length} seller{chatList.length !== 1 ? 's' : ''} interested
          </p>
        </div>
        
        <div className="overflow-y-auto h-full">
          {chatList.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 text-left hover:bg-white/5 transition-colors duration-300 border-b border-white/5 ${
                selectedChat?.id === chat.id ? 'bg-primary-blue/10 border-primary-blue/20' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {chat.sellerAvatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white truncate">
                      {chat.sellerName}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {chat.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {currentChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {currentChat.sellerAvatar}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {currentChat.sellerName}
                  </h4>
                  <p className="text-xs text-green-400">
                    Online now
                  </p>
                </div>
              </div>
              
              {level >= 3 && (
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'buyer'
                      ? 'bg-primary-blue text-white'
                      : 'bg-dark-accent text-gray-300'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'buyer' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-dark-accent text-gray-300 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                {level >= 3 && (
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                )}
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue pr-10"
                  />
                  
                  {level >= 3 && (
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Smile className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    message.trim()
                      ? 'bg-primary-blue text-white hover:bg-primary-blue/80'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">
                Select a Conversation
              </h3>
              <p className="text-gray-500 text-sm">
                Choose a seller to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
