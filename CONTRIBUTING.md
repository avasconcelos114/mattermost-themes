# Code Contribution Guidelines

Thank you for your interest in contributing!   
  
When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

## Adding a new theme
1. Add a new file under `src/themes` named `{themeName}.js` (in camel-casing) and copy the contents of another theme into this one
2. Edit the `name`, set `type` to either `light` or `dark`, set `addedDate` to today's date in `YYYY-MM-DD` format, and paste the JSON string from Mattermost's Account Settings into `theme`
3. Import your newly created file in `src/themes/index.js` and add it to the array in alphabetical order
4. Create a PR (see below) to add your contribution!

## Pull Request Process

1. Fork it (https://github.com/avasconcelos114/mattermost-themes/fork)
2. Create your feature branch (`git checkout -b feature-branch`)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request
