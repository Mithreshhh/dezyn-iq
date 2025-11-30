import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number and suffix from value (e.g., "500+" -> 500 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <motion.div
        className="text-4xl lg:text-5xl font-bold mb-2"
        style={{ color: '#ff9934' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {displayValue}{suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: "500+", label: "Products" },
    { value: "20+", label: "Projects" },
    { value: "50+", label: "Happy Clients" },
    { value: "1st", label: "Top in City" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {stats.map((stat, index) => (
        <AnimatedCounter key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Stats;
