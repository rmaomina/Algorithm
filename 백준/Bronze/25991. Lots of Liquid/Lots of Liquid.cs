namespace Solution {
  class Program {
    static void Main(string[] args) {

      var n = int.Parse(Console.ReadLine()!);

      double volume = 0.0;

      var input = Console.ReadLine()!.Split();
      for (int i = 0; i < n; i++) {
        var len = double.Parse(input![i]);
        volume += Math.Pow(len, 3);
      }

      double ans = Math.Pow(volume, 1.0 / 3);
      Console.WriteLine($"{ans:F6}");

    }
  }
}
