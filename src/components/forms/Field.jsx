"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const controlClass = (error) =>
  cn(
    "w-full border-b bg-transparent px-0 py-3 font-body text-[1rem] text-espresso transition-colors placeholder:text-espresso/35 focus:outline-none",
    error
      ? "border-b-2 border-espresso bg-espresso/[0.04]"
      : "border-espresso/30 focus:border-espresso focus:border-b-2"
  );

function Field({ id, label, error, hint, required, children }) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-[0.6rem] text-espresso/50">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-blush">
            *
          </span>
        )}
      </label>
      <div className="mt-2">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                "aria-describedby": describedBy,
                "aria-invalid": error ? true : undefined,
              })
            : child
        )}
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.82rem] font-semibold text-espresso">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[0.78rem] text-espresso/45">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({ id, label, error, hint, required, type = "text", ...props }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required}>
      <input id={id} name={id} type={type} className={controlClass(error)} {...props} />
    </Field>
  );
}

export function TextAreaField({ id, label, error, hint, required, rows = 4, ...props }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required}>
      <textarea id={id} name={id} rows={rows} className={cn(controlClass(error), "resize-none")} {...props} />
    </Field>
  );
}

export function SelectField({ id, label, error, hint, required, options, placeholder, ...props }) {
  return (
    <Field id={id} label={label} error={error} hint={hint} required={required}>
      <select id={id} name={id} className={cn(controlClass(error), "cursor-pointer")} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const text = typeof option === "string" ? option : option.label;
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </Field>
  );
}

export function CheckboxField({ id, label, error, checked, onChange }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-espresso"
        />
        <label htmlFor={id} className="cursor-pointer text-[0.86rem] leading-relaxed text-espresso/70">
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.82rem] font-semibold text-espresso">
          {error}
        </p>
      )}
    </div>
  );
}
