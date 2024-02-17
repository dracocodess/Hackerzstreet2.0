import { motion } from 'framer-motion';
export default function NavLink({ heading, href, _key }) {
  return (
    <motion.a
      href={href}
      variants={{
        initial: { x: -10, opacity: 0 },
        fadeIn: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.15 * _key,
          },
        },
        whileHover: {
          y: -10,
          transition: {
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.15,
          },
        },
      }}
      initial="initial"
      whileHover="whileHover"
      animate="fadeIn"
      className="relative z-10  lg:text-lg font-bold text-white hidden lg:block"
    >
      {heading.split('').map((l, i) => (
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { y: 10 },
          }}
          transition={{ type: 'spring' }}
          className="inline-block"
          key={i}
        >
          {l}
        </motion.span>
      ))}
    </motion.a>
  );
}
