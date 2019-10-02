# Code Contribution Guidelines

Thank you for your interest in contributing!   
  
When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

## Adding a new theme
1. Get a screenshot of a given theme you'd like to add to this repository
2. Save the screenshot under `public/img` with the naming standard `{themeName}.png` (in camel-casing)
3. Add a new file under `src/themes` and copy the contents of another theme into this one
4. Edit the `name`, `thumbnailUrl`, the `type` of theme to either `light` or `dark, and paste the JSON string from Mattermost's Account Settings into `theme`
5. Create a PR (see below) to add your contribution!

## Pull Request Process

1. Fork it (https://github.com/avasconcelos114/mattermost-themes/fork)
2. Create your feature branch (`git checkout -b feature-branch`)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request
