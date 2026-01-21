"use client";

import { useState, useEffect } from "react";
import { useForm } from "@tanstack/react-form";
import { motion } from "framer-motion";

import { Heading, Paragraph, SubscribeIcon } from "@/components";
import type { IconState } from "@/components/ui";
import { useCardOpacity } from "@/hooks";
import { subscribeSchema, useSubscribe } from "@/lib/subscribe";

const wiggle = {
  x: [-6, 4, -6, 4, 0],
  transition: {
    duration: 0.4,
    times: [0, 0.25, 0.5, 0.75, 1],
  },
};

function Contact() {
  const [title, setTitle] = useState("Let's stay in touch");
  const [shouldWiggle, setShouldWiggle] = useState(false);
  const [iconState, setIconState] = useState<IconState>("idle");
  const opacity = useCardOpacity(["Media"]);

  const mutation = useSubscribe();

  // Derive icon state from form/mutation status
  useEffect(() => {
    if (mutation.isPending) {
      setIconState("pending");
    } else if (mutation.isSuccess) {
      setIconState("success");
      const timer = setTimeout(() => setIconState("idle"), 2000);
      return () => clearTimeout(timer);
    } else if (mutation.isError) {
      setIconState("error");
      const timer = setTimeout(() => setIconState("idle"), 2000);
      return () => clearTimeout(timer);
    }
  }, [mutation.isPending, mutation.isSuccess, mutation.isError]);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: ({ value }) => {
        const result = subscribeSchema.safeParse(value);
        if (!result.success) {
          setShouldWiggle(true);
          setIconState("error");
          setTimeout(() => {
            setShouldWiggle(false);
            setIconState("idle");
          }, 2000);
          return {
            fields: {
              email: result.error.issues[0]?.message || "Invalid email address",
            },
          };
        }
        return undefined;
      },
    },
    onSubmit: ({ value }) => {
      mutation.mutate(value, {
        onSuccess: () => {
          setTitle("Thanks for subscribing!");
          form.reset();
        },
      });
    },
  });

  const errorMessage = form.state.fieldMeta.email?.errors?.[0] || mutation.error?.message;

  return (
    <form
      autoComplete=""
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      style={{ opacity }}
      className="h-full w-full flex flex-col items-start justify-between p-10 px-11 rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
    >
      <div>
        <Heading>{title}</Heading>
        <Paragraph>
          Content includes articles, early access to products, and ongoing learnings.
        </Paragraph>
      </div>

      <form.Field name="email">
        {(field) => (
          <motion.input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            onDrag={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            value={field.state.value}
            animate={shouldWiggle ? wiggle : { x: 0 }}
            placeholder="Email address"
            className="border-t-0 border-r-0 border-l-0 border-b-2 border-b-[rgb(240,242,248)] dark:border-b-border w-full text-foreground bg-transparent py-3 text-base tracking-[0.25px] font-normal mb-2 rounded-none autofill-themed"
          />
        )}
      </form.Field>

      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center">
        <motion.button
          disabled={mutation.isPending}
          className="h-9 px-3 rounded-[18px] shadow-[0_0_0_2px_var(--ring)] border-none bg-transparent flex items-center transition-all duration-300 ease-out hover:cursor-pointer hover:shadow-[0_0_0_5px_var(--ring)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SubscribeIcon state={iconState} />
          <span className="ml-1.5 text-sm text-foreground">
            {mutation.isPending ? "Subscribing..." : "Subscribe"}
          </span>
        </motion.button>
        {errorMessage && (
          <p className="text-sm leading-6 tracking-[0.25px] font-normal text-destructive mb-4 lg:mb-0 lg:ml-1.5">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}

export default Contact;
