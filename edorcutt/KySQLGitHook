ruleset a169xXXX {
  meta {
    name "KySQLGitHook"

    // Author: Ed Orcutt
    // Origin: https://gist.github.com/1150103
    // Tags: #webhook #twitter

    description <<
      Kynetx Github commit webhook
    >>

    author "Ed Orcutt, LOBOSLLC"
    logging on

    key twitter {
      "consumer_key"       : "YOUR KEY HERE",
      "consumer_secret"    : "YOUR KEY SECRET HERE",
      "oauth_token"        : "YOUR TOKEN HERE",
      "oauth_token_secret" : "YOUR TOKEN SECRET HERE"
    }
  }

  dispatch { }
  global { }

  // ------------------------------------------------------------------------
  rule GitCommit {
    select when webhook gitcommit
    foreach (event:param("payload")).decode().pick("$.commits") setting (commit)
    pre {
      commitAuthor  = commit.pick("$.author.name", true).head();
      commitMessage = commit.pick("$.message", true).head();
      commitURL     = commit.pick("$.url", true).head();
      msg = <<
        KySQL commit by #{commitAuthor} - #{commitMessage} #{commitURL}
      >>;
    }
    {
      twitter:update(msg);
    }
  }

  // ------------------------------------------------------------------------
  // Beyond here there be dragons :)
  // ------------------------------------------------------------------------
}