import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  packages = [
    {
      title: "LinkedIn Network Accelerator Package",
      description: "Paying for LinkedIn Navigator without making an impact on your sales?",
      features: [
        "Personalized outreach: No two prospects receive the same message.",
        "Target 500 high-quality prospects monthly.",
        "Prospects sourced from leading data providers.",
      ],
      price: "$249/month",
      note: "*No setup fees or hidden charges."
    },
    {
      title: "X (Formerly Twitter) Growth Package",
      description: "Overlooking the best platform for business conversations outside of LinkedIn?",
      features: [
        "Tailored outreach for each prospect.",
        "Engage with 500 prospects monthly.",
        "Prospects sourced from leading data providers.",
      ],
      price: "$249/month",
      note: "*No setup fees or hidden charges."
    },
    {
      title: "Email Outreach Package",
      description: "Want to execute email outreach the right way?",
      features: [
        "Custom messaging for each lead.",
        "Reach 500 prospects monthly after a 2-week warm-up period.",
        "Full email setup: DKIM, DMARC, SPF configuration.",
      ],
      price: "$249/month",
      note: "*No hidden charges."
    },
    {
      title: "AE Support Package",
      description: "Focus on leading your business—let a world-class enterprise AE handle your sales.",
      features: [
        "Attend 10 meetings per month with a fractional AE.",
        "Close enterprise deals efficiently.",
        "Seamlessly integrate with your CRM.",
      ],
      price: "$398/month",
      note: "*Ongoing performance reviews to optimize results."
    },
    {
      title: "Research Assistant Package",
      description: "Eliminate the hassle of pre-meeting research.",
      features: [
        "Save 30-40 minutes per meeting.",
        "In-depth analysis of LinkedIn, YouTube, Twitter, Instagram, & company websites to uncover valuable insights about your prospect and their organization.",
        "Personalized strategy report delivered to help build rapport and connections.",
      ],
      price: "Coming Soon",
      note: "*Actionable insights to your inbox."
    },
  ];
}
