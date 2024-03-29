"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const router = useRouter();

  const onCreate = () => {
    const promise = create({
      title: "Untitled Document",
    }).then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: "Creating document...",
      success: "Document created!",
      error: "Error creating document",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        loading="lazy"
        alt="Empty Document"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        width={300}
        height={300}
        loading="lazy"
        alt="Empty Document"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.fullName}&apos;s{" "}
        <span className="font-bold">Dotion</span>
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a new document
      </Button>
    </div>
  );
};

export default DocumentsPage;
