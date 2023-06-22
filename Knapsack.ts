export default function knapsack(weights: number[], values: number[], maxWeights: number, n: number): number {
  if (n === 0 || weights.length === 0) {
    return 0
  }

  if (weights[n - 1] > maxWeights) {
    return knapsack(weights, values, maxWeights, n - 1)
  }

  return Math.max(
    values[n - 1] + knapsack(weights, values, maxWeights - weights[n - 1], n - 1),
    knapsack(weights, values, maxWeights, n - 1)
  )
}