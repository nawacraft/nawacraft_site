"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";

export type BoardType = "success" | "danger" | "warning" | "info";
export type BoardVariant = "card" | "banner" | "compact";

export interface StatusBoardProps {
  type: BoardType;
  title: string;
  description: string;
  variant?: BoardVariant;
  categoryTag?: string;
  timestamp?: string;
  metrics?: Array<{ label: string; value: string }>;
  troubleshootingSteps?: string[];
  debugInfo?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
  className?: string;
}

export const StatusBoard: React.FC<StatusBoardProps> = ({
  type,
  title,
  description,
  variant = "card",
  categoryTag,
  timestamp,
  metrics,
  troubleshootingSteps,
  debugInfo,
  primaryAction,
  secondaryAction,
  onDismiss,
  className = "",
}) => {
  const [showDebug, setShowDebug] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const handlePrimaryClick = () => {
    if (primaryAction) {
      if (type === "danger" && primaryAction.label.toLowerCase().includes("retry")) {
        setIsRetrying(true);
        setTimeout(() => {
          setIsRetrying(false);
          primaryAction.onClick();
        }, 800);
      } else {
        primaryAction.onClick();
      }
    }
  };

  // Color configurations mapped directly to Tailwind tokens
  const config = {
    success: {
      badgeIntent: "success" as const,
      icon: <CheckCircle2 className="h-5 w-5 text-success-600 dark:text-success-400" />,
      haloBg: "bg-success-100 dark:bg-success-950/80 border border-success-200 dark:border-success-800/60",
      cardBorder: "border-success-200 dark:border-success-800/40",
      accentStripe: "bg-success-600",
      accentBg: "bg-success-50/60 dark:bg-success-950/20",
      bannerBg: "bg-success-50 dark:bg-success-950/60 border-success-200 dark:border-success-800/50",
      titleColor: "text-neutral-900 dark:text-neutral-50",
      bodyColor: "text-neutral-600 dark:text-neutral-300",
      buttonVariant: "success" as const,
    },
    danger: {
      badgeIntent: "danger" as const,
      icon: <AlertCircle className="h-5 w-5 text-danger-600 dark:text-danger-400" />,
      haloBg: "bg-danger-100 dark:bg-danger-950/80 border border-danger-200 dark:border-danger-800/60",
      cardBorder: "border-danger-200 dark:border-danger-800/40",
      accentStripe: "bg-danger-600",
      accentBg: "bg-danger-50/60 dark:bg-danger-950/20",
      bannerBg: "bg-danger-50 dark:bg-danger-950/60 border-danger-200 dark:border-danger-800/50",
      titleColor: "text-neutral-900 dark:text-neutral-50",
      bodyColor: "text-neutral-600 dark:text-neutral-300",
      buttonVariant: "danger" as const,
    },
    warning: {
      badgeIntent: "warning" as const,
      icon: <AlertTriangle className="h-5 w-5 text-warning-600 dark:text-warning-400" />,
      haloBg: "bg-warning-100 dark:bg-warning-950/80 border border-warning-200 dark:border-warning-800/60",
      cardBorder: "border-warning-200 dark:border-warning-800/40",
      accentStripe: "bg-warning-500",
      accentBg: "bg-warning-50/60 dark:bg-warning-950/20",
      bannerBg: "bg-warning-50 dark:bg-warning-950/60 border-warning-200 dark:border-warning-800/50",
      titleColor: "text-neutral-900 dark:text-neutral-50",
      bodyColor: "text-neutral-600 dark:text-neutral-300",
      buttonVariant: "primary" as const,
    },
    info: {
      badgeIntent: "info" as const,
      icon: <Info className="h-5 w-5 text-info-600 dark:text-info-400" />,
      haloBg: "bg-info-100 dark:bg-info-950/80 border border-info-200 dark:border-info-800/60",
      cardBorder: "border-info-200 dark:border-info-800/40",
      accentStripe: "bg-info-600",
      accentBg: "bg-info-50/60 dark:bg-info-950/20",
      bannerBg: "bg-info-50 dark:bg-info-950/60 border-info-200 dark:border-info-800/50",
      titleColor: "text-neutral-900 dark:text-neutral-50",
      bodyColor: "text-neutral-600 dark:text-neutral-300",
      buttonVariant: "primary" as const,
    },
  }[type];

  // BANNER VARIANT (Top notification ribbon)
  if (variant === "banner") {
    return (
      <aside
        role="status"
        aria-label={`${type} notification: ${title}`}
        className={`w-full border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-sm ${config.bannerBg} ${className}`}
      >
        <div className="flex items-start sm:items-center gap-3">
          <div className={`p-2 rounded-lg flex-shrink-0 ${config.haloBg}`}>
            {config.icon}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <h4 className={`text-sm font-semibold ${config.titleColor}`}>
              {title}
            </h4>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">
              •
            </span>
            <p className={`text-sm ${config.bodyColor}`}>
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          {primaryAction && (
            <Button
              size="sm"
              variant={config.buttonVariant}
              onClick={handlePrimaryClick}
              isLoading={isRetrying}
            >
              {primaryAction.label}
            </Button>
          )}
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </aside>
    );
  }

  // COMPACT VARIANT (Inline notification row)
  if (variant === "compact") {
    return (
      <div
        role="status"
        className={`flex items-center justify-between p-3 rounded-lg border bg-surface dark:bg-neutral-900 ${config.cardBorder} ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-md ${config.haloBg}`}>
            {config.icon}
          </div>
          <div>
            <h4 className={`text-sm font-medium ${config.titleColor}`}>{title}</h4>
            <p className={`text-xs ${config.bodyColor}`}>{description}</p>
          </div>
        </div>
        {primaryAction && (
          <Button
            size="sm"
            variant="ghost"
            onClick={handlePrimaryClick}
            className="text-xs"
          >
            {primaryAction.label}
          </Button>
        )}
      </div>
    );
  }

  // FULL CARD VARIANT (Professional Product Designer Board)
  return (
    <article
      aria-label={`${type} status board: ${title}`}
      className={`relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm transition-all hover:shadow-md ${config.cardBorder} ${className}`}
    >
      {/* Visual Accent Top Bar */}
      <div className={`h-1.5 w-full ${config.accentStripe}`} />

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3.5">
            <div className={`p-2.5 rounded-xl flex-shrink-0 shadow-xs ${config.haloBg}`}>
              {config.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge intent={config.badgeIntent} variant="subtle" size="sm" withDot dotPulse={type === "danger"}>
                  {categoryTag || type.toUpperCase()}
                </Badge>
                {timestamp && (
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {timestamp}
                  </span>
                )}
              </div>
              <h3 className={`text-lg font-semibold tracking-tight ${config.titleColor}`}>
                {title}
              </h3>
            </div>
          </div>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Narrative Description */}
        <p className={`text-sm leading-relaxed mb-5 ${config.bodyColor}`}>
          {description}
        </p>

        {/* Optional Metrics Grid (Standard for Success/Live Systems) */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {metric.label}
                </span>
                <span className="text-sm font-semibold font-mono text-neutral-800 dark:text-neutral-100 mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Optional Troubleshooting Guidance (Standard for Failure Boards) */}
        {troubleshootingSteps && troubleshootingSteps.length > 0 && (
          <div className="mb-5 p-4 rounded-xl bg-danger-50/50 dark:bg-danger-950/20 border border-danger-200/60 dark:border-danger-900/50">
            <div className="flex items-center gap-2 mb-2 text-danger-900 dark:text-danger-300 font-medium text-xs uppercase tracking-wider">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Recommended Resolution Steps</span>
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
              {troubleshootingSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0 h-4 w-4 rounded-full bg-danger-100 dark:bg-danger-900/50 text-danger-700 dark:text-danger-300 text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Optional Technical Debug Trace Drawer */}
        {debugInfo && (
          <div className="mb-5">
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              <span>{showDebug ? "Hide Diagnostic Trace" : "View Diagnostic Trace"}</span>
              {showDebug ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
            {showDebug && (
              <pre className="mt-2 p-3 rounded-lg bg-neutral-900 dark:bg-black text-neutral-200 text-[11px] font-mono overflow-x-auto border border-neutral-800 leading-tight">
                <code>{debugInfo}</code>
              </pre>
            )}
          </div>
        )}

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            {primaryAction && (
              <Button
                variant={config.buttonVariant}
                size="sm"
                onClick={handlePrimaryClick}
                isLoading={isRetrying}
                leftIcon={
                  type === "danger" && primaryAction.label.toLowerCase().includes("retry") ? (
                    <RefreshCw className="h-3.5 w-3.5" />
                  ) : primaryAction.icon ? (
                    primaryAction.icon
                  ) : null
                }
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="sm"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>

          <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
            System Design Token: <span className="font-mono text-neutral-600 dark:text-neutral-400">{type}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
