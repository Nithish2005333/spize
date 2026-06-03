"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";

interface InstaPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  link: string;
  handle: string;
  avatarInitials: string;
  location: string;
}

export default function InstagramFeed() {
  const posts: InstaPost[] = [
    {
      id: "ip1",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
      likes: "1,240",
      comments: "84",
      caption: "Gold ceiling suspensions and crystal drops. A magical mandap setup.",
      link: "https://www.instagram.com/spizeweddingsandevents?igsh=YWpiaHE4aDN1em02",
      handle: "@spizeweddingsandevents",
      avatarInitials: "S",
      location: "Grand Ballroom"
    },
    {
      id: "ip2",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
      likes: "942",
      comments: "56",
      caption: "Designing this sunset beach ceremony was pure magic. The golden hour hits just right.",
      link: "https://www.instagram.com/thakkar.reema?igsh=MW1nN3NlejhlMWExNg%3D%3D",
      handle: "@thakkar.reema",
      avatarInitials: "R",
      location: "Beachside Vows"
    },
    {
      id: "ip3",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600",
      likes: "2,105",
      comments: "142",
      caption: "Bespoke ivory and gold invitations. Executing perfection from the very first touchpoint.",
      link: "https://www.instagram.com/atreyatiwari?igsh=MWxqM2owOHF5a2w4eg%3D%3D",
      handle: "@atreyatiwari",
      avatarInitials: "A",
      location: "Bespoke Details"
    },
    {
      id: "ip4",
      image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=600",
      likes: "1,822",
      comments: "98",
      caption: "A grand ballroom entrance worthy of royalty.",
      link: "https://www.instagram.com/spizeweddingsandevents?igsh=YWpiaHE4aDN1em02",
      handle: "@spizeweddingsandevents",
      avatarInitials: "S",
      location: "Ballroom Gala"
    },
    {
      id: "ip5",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600",
      likes: "1,540",
      comments: "73",
      caption: "Fine table styling with custom linen and gold tableware. Aesthetic is in the details.",
      link: "https://www.instagram.com/thakkar.reema?igsh=MW1nN3NlejhlMWExNg%3D%3D",
      handle: "@thakkar.reema",
      avatarInitials: "R",
      location: "Table Curation"
    },
    {
      id: "ip6",
      image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600",
      likes: "2,410",
      comments: "189",
      caption: "Behind the scenes of structural perfection. Turning grand visual designs into reality.",
      link: "https://www.instagram.com/atreyatiwari?igsh=MWxqM2owOHF5a2w4eg%3D%3D",
      handle: "@atreyatiwari",
      avatarInitials: "A",
      location: "On Site Setup"
    },
    {
      id: "ip7",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600",
      likes: "1,130",
      comments: "49",
      caption: "Intimate floral backdrops for ring exchanges.",
      link: "https://www.instagram.com/spizeweddingsandevents?igsh=YWpiaHE4aDN1em02",
      handle: "@spizeweddingsandevents",
      avatarInitials: "S",
      location: "Floral Mandap"
    },
    {
      id: "ip8",
      image: "https://images.unsplash.com/photo-1507504038482-76210f6ec337?q=80&w=600",
      likes: "3,124",
      comments: "254",
      caption: "Curating dreamscapes under a canopy of fairy lights. A truly magical Sufi night.",
      link: "https://www.instagram.com/thakkar.reema?igsh=MW1nN3NlejhlMWExNg%3D%3D",
      handle: "@thakkar.reema",
      avatarInitials: "R",
      location: "Sufi Night Gala"
    },
    {
      id: "ip9",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600",
      likes: "1,455",
      comments: "67",
      caption: "Building the perfect overwater sunset ceremony setup. Precise engineering for floating vows.",
      link: "https://www.instagram.com/atreyatiwari?igsh=MWxqM2owOHF5a2w4eg%3D%3D",
      handle: "@atreyatiwari",
      avatarInitials: "A",
      location: "Overwater Pavilion"
    }
  ];

  return (
    <section id="instagram-feed" className="w-full py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title & Instagram Links */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 mb-12 border-b border-zinc-100 pb-6">
          <div className="space-y-2 text-center xl:text-left">
            <span className="font-cormorant italic text-gold text-xl md:text-2xl font-light">Social Journal</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-rich-black tracking-wide">
              On the Feed
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a
              href="https://www.instagram.com/spizeweddingsandevents?igsh=YWpiaHE4aDN1em02"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-gold transition-colors duration-300"
              data-hover="luxury"
            >
              <Instagram className="w-3.5 h-3.5 text-gold" />
              @spizeweddingsandevents
            </a>
            <span className="text-zinc-200 hidden md:inline">|</span>
            <a
              href="https://www.instagram.com/thakkar.reema?igsh=MW1nN3NlejhlMWExNg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-gold transition-colors duration-300"
              data-hover="luxury"
            >
              <Instagram className="w-3.5 h-3.5 text-gold" />
              @thakkar.reema
            </a>
            <span className="text-zinc-200 hidden md:inline">|</span>
            <a
              href="https://www.instagram.com/atreyatiwari?igsh=MWxqM2owOHF5a2w4eg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-gold transition-colors duration-300"
              data-hover="luxury"
            >
              <Instagram className="w-3.5 h-3.5 text-gold" />
              @atreyatiwari
            </a>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex flex-col bg-white border border-zinc-150 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-gold/30 group"
            >
              {/* Card Header (Instagram Style) */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-100 bg-white">
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/header"
                >
                  {/* Styled Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold via-champagne-dark to-gold flex items-center justify-center text-rich-black font-semibold text-xs tracking-wider border border-gold/20 shadow-sm">
                    {post.avatarInitials}
                  </div>
                  <div className="text-left">
                    <span className="block font-inter text-xs text-rich-black font-semibold tracking-wide hover:text-gold transition-colors duration-200">
                      {post.handle}
                    </span>
                    <span className="block font-inter text-[9px] text-zinc-400">
                      {post.location}
                    </span>
                  </div>
                </a>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-[10px] text-gold uppercase tracking-wider font-semibold hover:text-rich-black transition-colors"
                >
                  Visit Profile
                </a>
              </div>

              {/* Photo Card Container */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-zinc-100 overflow-hidden block"
                data-hover="luxury"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover Dark Gold Overlay */}
                <div className="absolute inset-0 bg-rich-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="space-y-2 text-center">
                    <p className="font-inter text-[11px] text-champagne/90 line-clamp-2 leading-relaxed font-light">
                      {post.caption}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-gold font-bold">
                      View on Instagram
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Footer (Instagram Style) */}
              <div className="p-4 bg-white flex flex-col gap-3 border-t border-zinc-50">
                {/* Interactions Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-500">
                    <button className="hover:text-gold transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="hover:text-gold transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="hover:text-gold transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="font-inter text-[10px] text-zinc-400 font-medium">
                    {post.likes} likes
                  </span>
                </div>

                {/* Caption Description */}
                <div className="text-left">
                  <p className="font-inter text-xs text-zinc-600 font-light leading-relaxed">
                    <span className="font-semibold text-rich-black mr-1.5">{post.handle}</span>
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
