"use client";

import { useLayoutEffect, useRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import styles from "./submission-dialog.module.css";

export type SubmissionFeedback = {
  kind: "success" | "error";
  title: string;
  message: string;
};

type SubmissionDialogProps = {
  id: string;
  pending: boolean;
  feedback: SubmissionFeedback | null;
  onDismiss: () => void;
};

export function SubmissionDialog({ id, pending, feedback, onDismiss }: SubmissionDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (!pending && !feedback) return;

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [pending, feedback]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-message`}
      aria-busy={pending}
      onCancel={(event) => { if (pending) event.preventDefault(); }}
      onClose={() => { if (!pending) onDismiss(); }}
    >
      <div className={styles.content} aria-live="polite">
        <div className={[styles.icon, pending ? styles.loading : feedback?.kind === "success" ? styles.success : styles.error].join(" ")} aria-hidden="true">
          {pending ? <span className={styles.spinner} /> : feedback?.kind === "success" ? <CheckCircle2 size={34} /> : <AlertCircle size={34} />}
        </div>
        <h2 id={`${id}-title`}>{pending ? "正在送出申請" : feedback?.title}</h2>
        <p id={`${id}-message`}>{pending ? "正在確認收件結果，請稍候（最多等待 30 秒）。" : feedback?.message}</p>
        {pending ? <div className={styles.progress} aria-hidden="true"><span /></div> : <button type="button" onClick={() => dialogRef.current?.close()}>我知道了</button>}
      </div>
    </dialog>
  );
}
