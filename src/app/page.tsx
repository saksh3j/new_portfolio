"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  FileCode, 
  Files, 
  Search, 
  GitBranch, 
  Play, 
  Blocks, 
  Settings, 
  UserCircle,
  ChevronRight,
  ChevronDown,
  X,
  Terminal as TerminalIcon,
  Circle,
  Layout,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { profile, about, experiences, education, projects, techStack, navItems } from "@/data/portfolio";

const FILES = [
  { name: "About.py", icon: <FileCode className="h-4 w-4 text-blue-400" />, type: "python" },
  { name: "Experience.ts", icon: <FileCode className="h-4 w-4 text-blue-500" />, type: "typescript" },
  { name: "Projects.json", icon: <FileCode className="h-4 w-4 text-yellow-500" />, type: "json" },
  { name: "Skills.css", icon: <FileCode className="h-4 w-4 text-purple-400" />, type: "css" },
  { name: "Contact.sh", icon: <TerminalIcon className="h-4 w-4 text-green-400" />, type: "bash" },
];

export default function Home() {
  const [activeFile, setActiveFile] = useState(FILES[0]);
  const [openFiles, setOpenFiles] = useState([FILES[0]]);
  const [showTerminal, setShowTerminal] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Welcome to saksh3j terminal v1.0.0",
    "Type 'help' to see available commands."
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);

  const handleFileClick = (file: typeof FILES[0]) => {
    setActiveFile(file);
    if (!openFiles.find(f => f.name === file.name)) {
      setOpenFiles([...openFiles, file]);
    }
  };

  const closeFile = (e: React.MouseEvent, fileName: string) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(f => f.name !== fileName);
    setOpenFiles(newOpenFiles);
    if (activeFile.name === fileName && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = currentCommand.trim().toLowerCase();
    let response = "";

    if (cmd === "clear") {
      setTerminalHistory([]);
      setCurrentCommand("");
      return;
    }

    setTerminalHistory(prev => [...prev, `saksh3j@portfolio:~$ ${currentCommand}`]);

    switch (cmd) {
      case "help":
        response = "Available commands: help, ls, whoami, contact, socials, clear, exit";
        break;
      case "ls":
        response = FILES.map(f => f.name).join("  ");
        break;
      case "whoami":
        response = `${profile.name} - ${profile.role}. Based in ${profile.location}.`;
        break;
      case "contact":
        response = "Email: jain.merge@gmail.com | Phone: +91-9461489207";
        break;
      case "socials":
        response = "GitHub: github.com/saksh3j | LinkedIn: linkedin.com/in/saksh3j";
        break;
      case "exit":
        setShowTerminal(false);
        break;
      case "":
        break;
      default:
        response = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    if (response) {
      setTerminalHistory(prev => [...prev, response]);
    }
    setCurrentCommand("");
  };

  return (
    <div className="vscode-container">
      {/* Activity Bar */}
      <div className="flex w-12 flex-col items-center justify-between border-r border-[#3c3c3c] bg-[#333333] py-4 text-[#858585]">
        <div className="flex flex-col gap-4">
          <Files className="h-6 w-6 cursor-pointer text-white" />
          <Search className="h-6 w-6 cursor-pointer hover:text-white" />
          <GitBranch className="h-6 w-6 cursor-pointer hover:text-white" />
          <Play className="h-6 w-6 cursor-pointer hover:text-white" />
          <Blocks className="h-6 w-6 cursor-pointer hover:text-white" />
        </div>
        <div className="flex flex-col gap-4">
          <UserCircle className="h-6 w-6 cursor-pointer hover:text-white" />
          <Settings className="h-6 w-6 cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r border-[#3c3c3c] bg-[#252526] md:flex">
        <div className="flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-[#bbbbbb]">
          <span>Explorer</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-1 px-2 py-1 text-[13px] font-bold">
            <ChevronDown className="h-4 w-4" />
            <span>PORTFOLIO</span>
          </div>
          
          <div className="flex flex-col">
            {FILES.map((file: typeof FILES[0]) => (
              <div
                key={file.name}
                onClick={() => handleFileClick(file)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 px-6 py-1 text-[13px] hover:bg-[#2a2d2e]",
                  activeFile.name === file.name ? "bg-[#37373d] text-white" : "text-[#cccccc]"
                )}
              >
                {file.icon}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#1e1e1e]">
        {/* Tabs Bar */}
        <div className="flex h-9 w-full overflow-x-auto bg-[#252526] no-scrollbar">
          {openFiles.map((file: typeof FILES[0]) => (
            <div
              key={file.name}
              onClick={() => setActiveFile(file)}
              className={cn(
                "group flex min-w-[120px] cursor-pointer items-center justify-between border-r border-[#1e1e1e] px-3 text-[13px] transition-colors",
                activeFile.name === file.name 
                  ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]" 
                  : "bg-[#2d2d2d] text-[#969696] hover:bg-[#2b2b2b]"
              )}
            >
              <div className="flex items-center gap-2">
                {file.icon}
                <span>{file.name}</span>
              </div>
              <X 
                onClick={(e) => closeFile(e, file.name)}
                className="invisible h-3 w-3 rounded hover:bg-[#454545] group-hover:visible" 
              />
            </div>
          ))}
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-1 px-4 py-1 text-[12px] text-[#a9a9a9]">
          <span>portfolio</span>
          <ChevronRight className="h-3 w-3" />
          <span>src</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{activeFile.name}</span>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-auto p-8 font-mono text-[14px] md:text-[16px] leading-relaxed scrollbar-thin scrollbar-thumb-[#3c3c3c]">
          <div className="mx-auto max-w-4xl">
            {activeFile.name === "About.py" && <AboutContent />}
            {activeFile.name === "Experience.ts" && <ExperienceContent />}
            {activeFile.name === "Projects.json" && <ProjectsContent />}
            {activeFile.name === "Skills.css" && <SkillsContent />}
            {activeFile.name === "Contact.sh" && <ContactContent />}
          </div>
        </div>

        {/* Terminal Panel */}
        {showTerminal && (
          <div className="h-1/3 min-h-[150px] flex flex-col border-t border-[#3c3c3c] bg-[#1e1e1e]">
            <div className="flex items-center justify-between px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#bbbbbb] border-b border-[#3c3c3c]">
              <div className="flex gap-4">
                <span className="text-white border-b border-white cursor-pointer pb-1">Terminal</span>
                <span className="hover:text-white cursor-pointer">Output</span>
                <span className="hover:text-white cursor-pointer">Debug Console</span>
              </div>
              <X className="h-4 w-4 cursor-pointer hover:bg-[#3c3c3c] rounded" onClick={() => setShowTerminal(false)} />
            </div>
            <div className="flex-1 overflow-auto p-4 font-mono text-[13px] text-[#cccccc] scrollbar-thin scrollbar-thumb-[#3c3c3c]">
              {terminalHistory.map((line: string, i: number) => (
                <div key={i} className="mb-1">{line}</div>
              ))}
              <form onSubmit={handleCommand} className="flex gap-2">
                <span className="text-green-400">saksh3j@portfolio:~$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-[#cccccc]"
                  autoFocus
                />
              </form>
              <div ref={terminalEndRef} />
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="flex h-6 w-full items-center justify-between bg-[#007acc] px-3 text-[12px] text-white">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
              <GitBranch className="h-3 w-3" />
              <span>main*</span>
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer" onClick={() => setShowTerminal(!showTerminal)}>
              <TerminalIcon className="h-3 w-3" />
              <span>Terminal</span>
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
              <Circle className="h-2 w-2 fill-white" />
              <span>0 Errors</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">UTF-8</span>
            <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer uppercase">{activeFile.type}</span>
            <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">saksh3j v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="space-y-2">
      <p><span className="code-keyword">class</span> <span className="code-function">Saksh3j</span>:</p>
      <div className="pl-8 space-y-2">
        <p><span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-variable">self</span>):</p>
        <div className="pl-8 space-y-1">
          <p><span className="code-variable">self</span>.name = <span className="code-string">&quot;{profile.name}&quot;</span></p>
          <p><span className="code-variable">self</span>.role = <span className="code-string">&quot;{profile.role}&quot;</span></p>
          <p><span className="code-variable">self</span>.location = <span className="code-string">&quot;{profile.location}&quot;</span></p>
        </div>
        <p className="mt-4"><span className="code-keyword">def</span> <span className="code-function">get_bio</span>(<span className="code-variable">self</span>):</p>
        <div className="pl-8 text-[#cccccc]">
          <span className="code-string">&quot;&quot;&quot;</span>
          {about.map((p: string, i: number) => (
            <p key={i} className="mt-2 text-[#ce9178]">{p}</p>
          ))}
          <span className="code-string">&quot;&quot;&quot;</span>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-6">
      <p><span className="code-keyword">interface</span> <span className="code-function">Experience</span> {"{"}</p>
      <div className="pl-8 space-y-8">
        {experiences.map((exp: any, i: number) => (
          <div key={i} className="border-l-2 border-[#3c3c3c] pl-4">
            <p><span className="code-comment">// {exp.period}</span></p>
            <p><span className="code-keyword">const</span> <span className="code-variable">{exp.company.replace(/\s+/g, '')}</span> = {"{"}</p>
            <div className="pl-8">
              <p>role: <span className="code-string">&quot;{exp.role}&quot;</span>,</p>
              <p>summary: <span className="code-string">&quot;{exp.summary}&quot;</span></p>
            </div>
            <p>{"};"}</p>
          </div>
        ))}
      </div>
      <p>{"}"}</p>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="text-[#9cdcfe]">
      <p className="text-[#cccccc]">{"["}</p>
      {projects.map((project: any, i: number) => (
        <div key={i} className="pl-8 py-2">
          <p className="text-[#cccccc]">{"{"}</p>
          <div className="pl-8">
            <p><span className="text-[#9cdcfe]">&quot;title&quot;</span>: <span className="code-string">&quot;{project.title}&quot;</span>,</p>
            <p><span className="text-[#9cdcfe]">&quot;description&quot;</span>: <span className="code-string">&quot;{project.description}&quot;</span>,</p>
            <p><span className="text-[#9cdcfe]">&quot;stack&quot;</span>: [<span className="code-string">{project.stack.map((s: string) => `"${s}"`).join(", ")}</span>]</p>
          </div>
          <p className="text-[#cccccc]">{"}"}{i < projects.length - 1 ? "," : ""}</p>
        </div>
      ))}
      <p className="text-[#cccccc]">{"]"}</p>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-8">
      {techStack.map((group: any, i: number) => (
        <div key={i}>
          <p className="code-function">.{group.title.toLowerCase().replace(/\s+/g, '-')}</p>
          <div className="pl-8 border-l-2 border-[#3c3c3c]">
            {group.items.map((item: string, j: number) => (
              <p key={j}><span className="code-keyword">{item.toLowerCase().replace(/\s+/g, '-')}</span>: <span className="code-number">mastered</span>;</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactContent() {
  return (
    <div className="space-y-4">
      <p className="code-comment">#!/bin/bash</p>
      <p><span className="code-keyword">echo</span> <span className="code-string">&quot;Connecting to saksh3j...&quot;</span></p>
      <div className="space-y-2 mt-6">
        <p><span className="code-variable">EMAIL</span>=<span className="code-string">&quot;jain.merge@gmail.com&quot;</span></p>
        <p><span className="code-variable">GITHUB</span>=<span className="code-string">&quot;https://github.com/saksh3j&quot;</span></p>
        <p><span className="code-variable">LINKEDIN</span>=<span className="code-string">&quot;https://linkedin.com/in/saksh3j&quot;</span></p>
      </div>
      <p className="mt-8 text-green-400"># Run the form to send a message</p>
      <p className="code-function">./send_message.sh</p>
    </div>
  );
}
