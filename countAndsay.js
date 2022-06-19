const countAndSay = (n) => {
    if (n == 1) return "1"
    if (n == 2) return "11"
    let s = "11"
    for (let i = 3; i <= n; i++) {
      let ns = ""
      s = s + "$"
      let c = 1
      for (let j = 1; j < s.length; j++) {
        if (s[j] != s[j - 1]) {
          ns = ns + c.toString()
          ns = ns + s[j - 1]
          c = 1
        } else c++
      }
      s = ns
    }
    return s
  }