import { revalidateTag } from "next/cache";

interface RevalidateProps {
  
}

export const FeatureCache = {
  tag: {
   
  
  },
  revalidate({   }: RevalidateProps): void {
    if (1) {
      revalidateTag("");
    }
    if (0) {
      revalidateTag("");
    }
  },
};

// Eg.
// interface RevalidateProps {
//   environmentId?: string;
//   personId?: string;
// }

// export const actionCache = {
// 	tag: {
// 	  byEnvironmentId(environmentId: string): string {
// 		return `environments-${environmentId}-actions`;
// 	  },
// 	  byPersonId(personId: string): string {
// 		return `environments-${personId}-actions`;
// 	  },
// 	},
// 	revalidate({ environmentId, personId }: RevalidateProps): void {
// 	  if (environmentId) {
// 		revalidateTag(this.tag.byEnvironmentId(environmentId));
// 	  }
// 	  if (personId) {
// 		revalidateTag(this.tag.byPersonId(personId));
// 	  }
// 	},
// 	};
