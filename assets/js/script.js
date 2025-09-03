// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link")
  const tabContents = document.querySelectorAll(".tab-content")

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all tabs and contents
      tabLinks.forEach((tab) => tab.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Show corresponding content
      const targetId = this.getAttribute("href").substring(1)
      const targetContent = document.getElementById(targetId)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })
})
