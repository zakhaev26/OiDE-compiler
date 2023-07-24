fn factorial(n: u64) -> u64 {
    if n == 0 {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

fn main() {
    let num = 5; // Replace 5 with the number for which you want to calculate the factorial
    let result = factorial(num);
    println!("Factorial of {} is: {}", num, result);
}
