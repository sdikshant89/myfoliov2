'use client';
import { Boxes } from '@/components/ui/background-boxes';
import { Input } from '@/components/ui/form-components';
import { cn } from '@/utils/cn';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<'h1'>;
  className?: string;
}

function WordRotate({
  words,
  duration = 4000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

function CustomInput({
  label,
  placeholder,
  type,
  rows,
  value,
  ...props
}: {
  label: string;
  placeholder: string;
  type: string;
  rows?: number;
  value: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-y-2 pt-6 w-full">
      <h2 className="text-white font-bold text-xl">{label}</h2>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        rows={rows}
        {...props}
      />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default function page() {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleClear = () => {
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    if (e.target.checkValidity()) {
      const formData = new URLSearchParams(Object.entries(formValues));
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    } else {
      alert('Form is invalid! Please check the fields');
    }
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen w-full bg-gradient-to-br from-gray-700 to-black antialiased "
    >
      <Boxes />
      <form
        noValidate
        name="ContactMe"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="z-10 p-8 w-2/5 bg-black/50 rounded-2xl"
      >
        <input type="hidden" name="form-name" value="ContactMe" />
        <WordRotate
          className="text-7xl font-bold text-black dark:text-white text-center pt-8"
          words={[
            'Contact.',
            'Say Hi!',
            'Let’s Connect!',
            'Get in touch :)',
            'Have a Question?',
            'Start a Conv.',
            'Message Away!',
          ]}
        />
        <div className="flex items-center justify-center gap-x-5">
          <CustomInput
            label="Name"
            placeholder="Javas Cript"
            value={formValues.name}
            type="text"
            required
            pattern="[A-Za-z ]+"
            onChange={handleInputChange}
            name="name"
          />
          <CustomInput
            label="Email"
            placeholder="sharma.dshan@gmail.com"
            value={formValues.email}
            type="email"
            required
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <CustomInput
          label="Message"
          placeholder="Hi Dikshant! Nice Connecting with you."
          value={formValues.message}
          type="text"
          rows={4}
          required
          onChange={handleInputChange}
          name="message"
        />
        <div className="flex items-center justify-center gap-x-5 pt-10">
          <button
            onClick={handleClear}
            type="button"
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            Clear
            <BottomGradient />
          </button>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
