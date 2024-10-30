'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu, X, Send, Bookmark, MoreHorizontal, Link, MapPin, Grid, PlaySquare, BookmarkIcon, Home, ExternalLink, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: number;
  description: string;
  github: string;
  tags: string[];
}

interface Story {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Component() {
  const [activeTab, setActiveTab] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [stories, setStories] = useState<Story[]>([])
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [selectedImage, setSelectedImage] = useState<Post | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    return () => {
      setSelectedStory(null)
      setSelectedImage(null)
    }
  }, [])
  useEffect(() => {
    setPosts([
      { id: 1,
        title: 'RARECARE', 
        image: '/rarecare.jpeg', 
        likes: 120, 
        comments: 15, 
        description: 'RareCare is a platform designed to help patients with rare or critical diseases get expert opinions by connecting them with a panel of doctors who collaborate on finding the best treatment plans. ', 
        github: 'https://github.com/iftekharanwar/RareCare', 
        tags: ['AI', 'Next.js', 'Python', 'Tailwind CSS'] },
      
      { id: 2, 
        title: 'AgroMind AI', 
        image: '/agromindai.jpeg', 
        likes: 89, 
        comments: 7, 
        description: 'AgroMind AI, focuses on helping farmers make smarter decisions by leveraging satellite data, AI, and predictive analytics to tackle challenges like unpredictable weather, soil health, and potential pest outbreaks. ', 
        github: 'https://github.com/iftekharanwar/Agromind-AI', 
        tags: ['AI', 'MongoDB', 'Next.js', 'Python'] },
      
      { id: 3, 
        title: 'TAILEISURE', 
        image: '/taileisure.png', 
        likes: 256, 
        comments: 32, 
        description: 'Created an addictive mobile game using Unity and C#.', 
        github: 'https://github.com/iftekharanwar/hackupc24', 
        tags: ['AI', 'Flask', 'Node.js', 'Python'] },
      
      { id: 4, 
        title: 'Global Coffee Consumption Trends', 
        image: '/coffee.png', 
        likes: 78, 
        comments: 5, 
        description: 'This project aims to analyze global coffee consumption trends and investigate the potential impact of climate change on coffee production. By combining data on coffee consumption, production, and climate variables, we seek to uncover insights into the relationships between these factors and their implications for the global coffee industry.', 
        github: 'https://github.com/iftekharanwar/GlobalCoffeeConsumptionTrends?tab=readme-ov-file', 
        tags: ['Python'] },
      
      { id: 5, 
        title: 'The GreenMap Project', 
        image: '/gmap.png', 
        likes: 145, 
        comments: 23, 
        description: 'This page provides specific information about a designated green point in the Green Map Project, showcasing geolocation details and environmental data on urban green spaces.', 
        github: 'https://github.com/tomorrowdevs-projects/tech-jobs-fair-pisa-2024-team4', 
        tags: ['Java', 'React.js', 'Spring Boot'] },
      
      { id: 6, title: 'Designer Portfolio', 
        image: '/portfol.png', 
        likes: 67, 
        comments: 9, 
        description: 'Developed a digital portfolio showcasing expertise in full-stack development, web solutions, and innovative tech projects, providing insights into professional skills, projects, and industry contributions.', 
        github: '', 
        tags: ['HTML', 'CSS', 'JavaScript'] 
      },
    ])
    setStories([
      { id: 1, title: 'Harvard University', image: '/harvard.jpg', description: 'Went to Harvard University to participate in HackHarvard 2024.' },
      { id: 2, title: 'NASA Space Apps', image: '/nasa.jpeg', description: 'Won 2nd place in NASA Space Apps 2024.' },
      { id: 3, title: 'Cambridge', image: '/cambridge.jpeg', description: 'Love this place!' },
      { id: 4, title: 'ETH Entrepreneur', image: '/eth.png', description: 'Will be attending ETH Entrepreneur 2024.' },
    ])
  }, [])

  const navItems = [
    { icon: <Home size={24} />, label: 'Home', id: 'home' },
    { icon: <User size={24} />, label: 'Profile', id: 'profile' },
    { icon: <Search size={24} />, label: 'Search', id: 'search' },
    { icon: <Compass size={24} />, label: 'Explore', id: 'explore' },
    { icon: <Film size={24} />, label: 'Projects', id: 'projects' },
    { icon: <MessageCircle size={24} />, label: 'Contact', id: 'contact' },
    { icon: <Heart size={24} />, label: 'Likes', id: 'likes' },
  ]

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const HomeView = () => (
    <div className="p-4">
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-4">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedStory(story)}
          >
            <Avatar className="w-16 h-16 ring-2 ring-purple-500 p-1 bg-gray-800">
              <AvatarImage src={story.image} alt={story.title} />
              <AvatarFallback>{story.title[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-1 text-gray-300">{story.title}</span>
          </motion.div>
        ))}
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/profilepicture.png" alt="Iftekhar Anwar" />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-sm font-semibold text-gray-100">{post.title}</h2>
                  <p className="text-xs text-gray-400">Iftekhar Anwar</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto text-gray-300 hover:text-white">
                  <MoreHorizontal size={20} />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={post.image || ''}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority={true}
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.png'
                  }}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                      <Heart size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                      <MessageCircle size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                      <Send size={20} />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Bookmark size={20} />
                  </Button>
                </div>
                <p className="text-sm font-semibold text-gray-100">{post.likes} likes</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-gray-100">Iftekhar Anwar</span> {post.description}
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-2">View all {post.comments} comments</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={post.github} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-400 hover:text-blue-300 flex items-center">
                  <Github size={16} className="mr-1" />
                  View on GitHub
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const ProfileView = () => (
    <div className="flex flex-col items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-32 h-32 border-4 border-purple-500">
                <AvatarImage src="/profilepicture.png" alt="Iftekhar Anwar" />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Iftekhar Anwar</h2>
                <p className="text-gray-400 mb-4">Student at Politecnico di Torino</p>
                <div className="flex justify-between w-full mb-6">
                  <div className="text-center">
                    <div className="font-bold">{posts.length}</div>
                    <div className="text-gray-400">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">1.2k</div>
                    <div className="text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">500</div>
                    <div className="text-gray-400">Following</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin size={16} className="mr-2 text-purple-400" />
                  <span>Torino, Italy</span>
                </div>
                <div className="flex items-center mb-4">
                  <Link size={16} className="mr-2 text-purple-400" />
                  <a href="https://iftekharanwarfeed.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">iftekharlinktree.it</a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Biography</h3>
              <p className="text-gray-300">
              I am a student at Politecnico di Torino, pursuing a degree in Computer Science. I am passionate about technology and enjoy exploring new technologies and frameworks. I am also interested in web development and have experience in building web applications using React.js, Next.js, and Tailwind CSS. I am currently working on a project that focuses on helping farmers make smarter decisions by leveraging satellite data, AI, and predictive analytics to tackle challenges like unpredictable weather, soil health, and potential pest outbreaks. I am excited to continue learning and growing in the field of computer science and to make a positive impact through technology.
              </p>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="posts" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts"><Grid size={24} /></TabsTrigger>
            <TabsTrigger value="reels"><PlaySquare size={24} /></TabsTrigger>
            <TabsTrigger value="saved"><BookmarkIcon size={24} /></TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={150} 
                    height={150} 
                    className="object-cover aspect-square cursor-pointer rounded-md" 
                    onClick={() => setSelectedImage(post)}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reels" className="mt-4">
            <p className="text-center text-gray-400">No reels yet</p>
          </TabsContent>
          <TabsContent value="saved" className="mt-4">
            <p className="text-center text-gray-400">No saved posts</p>
          </TabsContent>
        </Tabs>
      
      </motion.div>
    </div>
  )

  const SearchView = () => (
    <div className="p-4">
      <Input 
        className="mb-4" 
        placeholder="Search projects, skills, or technologies" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-1">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              width={150} 
              height={150} 
              className="object-cover aspect-square cursor-pointer rounded-md" 
              onClick={() => setSelectedImage(post)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )

  const ExploreView = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Explore Projects</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-4">
                <Avatar>
                  <AvatarImage src="/profilepicture.png" alt="Iftekhar Anwar" />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold text-gray-100">{post.title}</h3>
                  <p className="text-xs text-gray-400">Iftekhar Anwar</p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Image src={post.image} alt={post.title} width={400} height={400} className="w-full h-auto" />
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Heart size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <MessageCircle size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Send size={20} />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Bookmark size={20} />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const ProjectsView = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Projects</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-100">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-gray-400">{post.likes} likes</span>
                <a href={post.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                  <Github size={16} className="mr-1" />
                  View on GitHub
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const ContactView = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-200">Your Name</label>
                <Input id="name" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-gray-100" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-200">Your Email</label>
                <Input id="email" type="email" placeholder="yourmail@example.com" className="bg-gray-700 border-gray-600 text-gray-100" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-200">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-gray-700 border-gray-600 text-gray-100" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-200">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="Hello, I'd like to discuss a potential project..."
                ></textarea>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
            </form>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="mailto:iftekharanwar1002@gmail.com" className="text-blue-400 hover:text-blue-300 flex items-center">
                <Mail size={20} className="mr-2" />
                Gmail
              </a>
              
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )

  const LikesView = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Liked Projects</h2>
      <div className="grid gap-4">
        {posts.slice(0, 3).map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/profilepicture.png" alt="Iftekhar Anwar" />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold text-gray-100">{post.title}</h3>
                  <p className="text-xs text-gray-400">Iftekhar Anwar</p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Image src={post.image} alt={post.title} width={400} height={400} className="w-full h-auto" />
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <span className="text-gray-400">{post.likes} likes</span>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                  Unlike
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-3xl z-0"></div>
      <nav className="hidden md:flex flex-col w-16 lg:w-64 border-r border-gray-700 bg-gray-900/60 backdrop-blur-lg p-4 z-10">
        <motion.h1 
          className="text-2xl font-bold mb-8 lg:block hidden text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
          onClick={() => setActiveTab('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iftekhar Anwar
        </motion.h1>
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`flex items-center space-x-2 w-full p-2 rounded-md ${
              activeTab === item.id ? 'bg-gray-800 text-purple-400' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab(item.id)}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="hidden lg:inline">{item.label}</span>
          </motion.button>
        ))}
      </nav>
      <main className="flex-1 overflow-hidden z-10">
        <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900/60 backdrop-blur-lg">
          <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </Button>
          <motion.h1 
            className="text-xl font-semibold md:hidden text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
            onClick={() => setActiveTab('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iftekhar Anwar
          </motion.h1>
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/iftekharanwar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/iftekharanwar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </header>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'home' && <HomeView />}
              {activeTab === 'profile' && <ProfileView />}
              {activeTab === 'search' && <SearchView />}
              {activeTab === 'explore' && <ExploreView />}
              {activeTab === 'projects' && <ProjectsView />}
              {activeTab === 'contact' && <ContactView />}
              {activeTab === 'likes' && <LikesView />}
            </motion.div>
          </AnimatePresence>
        </ScrollArea>
      </main>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-gray-900/95 backdrop-blur-lg border-r border-gray-700 p-4 z-50 md:hidden"
          >
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </Button>
            <motion.h1 
              className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
              onClick={() => {
                setActiveTab('home')
                setIsMenuOpen(false)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iftekhar Anwar
            </motion.h1>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                  activeTab === item.id ? 'bg-gray-800 text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMenuOpen(false)
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Dialog open={selectedStory !== null} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="bg-gray-900 text-gray-100">
          <DialogHeader>
            <DialogTitle>{selectedStory?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              src={selectedStory?.image || '/placeholder.png'}
              alt={selectedStory?.title || 'Story image'}
              width={400}
              height={400}
              className="w-full h-auto mb-4"
              priority={true}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.png'
              }}
            />
            <DialogDescription>{selectedStory?.description}</DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-gray-900 text-gray-100">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              src={selectedImage?.image || ''}
              alt={selectedImage?.title || ''}
              width={400}
              height={400}
              className="w-full h-auto mb-4"
              priority={true}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.png'
              }}
            />
            <DialogDescription>{selectedImage?.description}</DialogDescription>
            <a href={selectedImage?.github} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:text-blue-300 flex items-center">
              <Github size={16} className="mr-1" />
              View on GitHub
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
