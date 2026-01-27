import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ post }) => {
  if (!post) return null;

  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="flex flex-wrap sm:flex-nowrap group mb-8 items-center">
        <Image className="block" src={post.image} alt={post.title} width={300} height={200} style={{ objectFit: 'cover' }} />
        <div className="mt-6 sm:mt-0 sm:ml-8">
          {post.category && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-100 text-teal-700 rounded-full">
                {post.category}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
            </p>
          )}
          <footer className="flex items-center">
            <Image className="w-8 h-8 rounded-full" src={post.author.avatar} alt={post.author.name} width={32} height={32} style={{ objectFit: 'cover' }} />
            <div className="flex items-center ml-4">
              <span className="text-sm font-medium">{post.author.name}</span>
              <span className="mx-2 sm:mx-4">
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#929C9A" />
                </svg>
              </span>
              <span className="text-sm font-medium">{post.readTime}</span>
              {post.date && (
                <>
                  <span className="mx-2 sm:mx-4">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#929C9A" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{post.date}</span>
                </>
              )}
            </div>
          </footer>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;