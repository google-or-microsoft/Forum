# Initialize Project:

Step 1. Clone from GitHub files to clone the project.

```git clone https://github.com/google-or-microsoft/Forum```

Step 2. Navigate into the project folder Forum

Step 3. On GitHub page, create a new branch. Your own branch.

Step 4. Copy a local branch from remote branch

```git checkout your-branch-name```

# Start A Ticket

**Step 1. Pick a ticket (issue) from GitHub Board**

  Tickets will initially be on your To Do column

**Step 2. Work on a new issue**

  Board actions:

  Move ticket to In Progress.

  GIT actions:

  Create feature branch on your local repo:

  From an up-to-date master
  ```git checkout -b d_cc-1234-bug-fix```
  ```git push -u origin d_cc-1234-bug-fix```

  Make some changes...

  Keep your feature branch up to date by rebasing once in a while:

  ```git fetch```   
  ```git rebase origin/master```    
  ```git push -f ```    

**Step 3. Submit pull request for code review**

  Create pull request, link your pull request to the issue

  Board actions:

  Add PR to the ticket.

  Slack actions:

  Post link to PR (and brief summary) on #﻿proj-web-code-review and tag people who you want to review.

  GIT actions:

  Submit additional changes to address any feedback from the code review.

# Complete your pull request

GIT actions:

Once code review is done, go ahead and merge it into main.

Make sure to use the "Squash commit" merge type as shown below:

