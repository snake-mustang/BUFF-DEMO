import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 Tailwind CSS 类名
 * @param inputs - 类名数组
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 格式化价格
 * @param price - 价格数值
 * @param currency - 货币符号
 * @returns 格式化后的价格字符串
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

/**
 * 格式化销量
 * @param sold - 销量数值
 * @returns 格式化后的销量字符串
 */
export function formatSold(sold: number): string {
  if (sold >= 1000000) {
    return `${(sold / 1000000).toFixed(1)}M Sold`
  }
  if (sold >= 1000) {
    return `${(sold / 1000).toFixed(1)}K Sold`
  }
  return `${sold}+ Sold`
}

/**
 * 计算折扣百分比
 * @param originalPrice - 原价
 * @param discountPrice - 折扣价
 * @returns 折扣百分比
 */
export function calculateDiscount(originalPrice: number, discountPrice: number): number {
  return Math.round((1 - discountPrice / originalPrice) * 100)
}

