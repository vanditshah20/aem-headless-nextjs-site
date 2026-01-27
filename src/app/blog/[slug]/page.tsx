'use client';

import { useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/layout/cta-section';
import blogData from '@/data/blog.json';

interface BlogSinglePageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogSinglePage({ params }: BlogSinglePageProps) {
  const { slug } = use(params);

  // Find the blog post based on the slug
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Flow`;
    } else {
      document.title = 'Blog Post Not Found - Flow';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="antialiased bg-body text-body font-body">
        <AnnouncementBar />
        <SimpleNavigation />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-gray-900 text-4xl md:text-5xl mb-8">Post Not Found</h1>
              <p className="text-gray-600 text-lg mb-8">The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-teal-900 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-teal-900 transition-colors">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-teal-900 transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="inline-block px-4 py-2 bg-teal-900/10 text-teal-900 text-sm font-medium rounded-full mb-6">
                {post.category}
              </div>
            )}

            {/* Title */}
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-3">
                {post.author?.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                )}
                <span>{post.author?.name || 'Flow Team'}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime || '5 min read'}</span>
            </div>

            {/* Excerpt */}
            <p className="text-gray-700 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-orange-50 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                  width={1200}
                  height={500}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  {post.content?.intro || `Welcome to this comprehensive guide where we dive deep into the topic of ${post.title.toLowerCase()}. In today's rapidly evolving green energy landscape, understanding these concepts is crucial for creating a sustainable future.`}
                </p>

                <p>
                  {post.excerpt} This article will provide you with actionable insights and practical strategies
                  that you can implement to make a positive environmental impact.
                </p>

                {post.content?.keyTakeaways && (
                  <>
                    <h2 className="text-gray-900 text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>
                    <ul className="space-y-3 text-gray-700">
                      {post.content.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {post.content?.sections?.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-gray-900 text-3xl font-bold mt-12 mb-6">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                )) || (
                  <>
                    <h2 className="text-gray-900 text-3xl font-bold mt-12 mb-6">The Path to Sustainability</h2>
                    <p>
                      The journey toward a more sustainable future begins with understanding and implementing
                      green energy solutions. Whether you&apos;re exploring solar power, wind energy, or other
                      renewable sources, the same fundamental approach applies: assess your needs, plan your
                      implementation, execute with precision, and monitor your impact.
                    </p>
                  </>
                )}

                {post.content?.proTip && (
                  <div className="bg-lime-50 border border-lime-200 rounded-2xl p-8 my-8">
                    <h3 className="text-teal-900 text-xl font-semibold mb-4">🌱 Green Tip</h3>
                    <p className="text-gray-700 mb-0">
                      {post.content.proTip}
                    </p>
                  </div>
                )}

                <h2 className="text-gray-900 text-3xl font-bold mt-12 mb-6">Moving Forward</h2>

                <p>
                  {post.content?.conclusion || `Embracing ${post.title.toLowerCase()} is a step toward creating a more sustainable world. By following the strategies outlined in this guide, you'll be well-equipped to make meaningful contributions to our planet's future.`}
                </p>

                <p>
                  Remember that sustainability is a continuous journey. Keep learning, adapting, and implementing
                  new green technologies and practices as they become available.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-teal-900/10 to-lime-500/10 border border-teal-900/20 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-gray-900 text-2xl font-bold mb-4">Ready to Make a Green Impact?</h3>
                <p className="text-gray-700 mb-6">
                  Join thousands of environmentally conscious individuals and businesses who trust Flow for their green energy solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-900 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-800 transition-colors duration-200"
                >
                  Get Started Today
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-teal-900 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to All Posts
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h3 className="text-gray-900 text-2xl font-bold mb-8">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogData
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative">
                        {relatedPost.image && (
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={192}
                          />
                        )}
                        {relatedPost.category && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-900 text-sm font-medium rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-gray-900 text-xl font-semibold mb-3 leading-tight group-hover:text-teal-900 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime || '5 min read'}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}