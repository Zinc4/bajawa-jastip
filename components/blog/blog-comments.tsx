"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Reply, ThumbsUp } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  date: string;
  avatar: string;
  likes: number;
  replies?: Comment[];
}

// Sample comments data
const sampleComments: Comment[] = [
  {
    id: "1",
    author: "Ahmad Rizki",
    email: "ahmad@example.com",
    content:
      "This is really helpful! I've been struggling with shipping electronics safely. The tip about anti-static packaging is something I never considered before.",
    date: "2023-04-16T10:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 5,
    replies: [
      {
        id: "1-1",
        author: "Budi Santoso",
        email: "budi@bajawajastip.com",
        content:
          "Thank you for the feedback, Ahmad! Anti-static packaging is indeed crucial for electronics. Feel free to reach out if you have any other questions about safe shipping practices.",
        date: "2023-04-16T14:20:00Z",
        avatar: "/placeholder.svg?height=40&width=40",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    author: "Sari Dewi",
    email: "sari@example.com",
    content:
      "Great article! I run a small electronics business and these tips will definitely help me improve my shipping process. Do you offer any special packaging services for small businesses?",
    date: "2023-04-17T09:15:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 3,
  },
  {
    id: "3",
    author: "Michael Chen",
    email: "michael@example.com",
    content:
      "The point about removing batteries is so important. I learned this the hard way when a package was delayed due to battery regulations. Thanks for sharing these insights!",
    date: "2023-04-18T16:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 7,
  },
];

interface BlogCommentsProps {
  postId: string;
}

export function BlogComments({ postId }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newComment.name,
        email: newComment.email,
        content: newComment.content,
        date: new Date().toISOString(),
        avatar: "/placeholder.svg?height=40&width=40",
        likes: 0,
      };

      setComments([comment, ...comments]);
      setNewComment({ name: "", email: "", content: "" });
      setIsSubmitting(false);

      toast({
        title: "Comment posted!",
        description: "Your comment has been added successfully.",
      });
    }, 1000);
  };

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const CommentItem = ({
    comment,
    isReply = false,
  }: {
    comment: Comment;
    isReply?: boolean;
  }) => (
    <div className={`${isReply ? "ml-12 mt-4" : "mb-6"}`}>
      <div className="flex items-start gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={comment.avatar || "/placeholder.svg"}
            alt={comment.author}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sm">{comment.author}</h4>
              <span className="text-xs text-gray-500">
                {formatDate(comment.date)}
              </span>
            </div>
            <p className="text-gray-700 text-sm">{comment.content}</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleLike(comment.id)}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary"
            >
              <ThumbsUp className="h-3 w-3" />
              {comment.likes}
            </button>
            {!isReply && (
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary"
              >
                <Reply className="h-3 w-3" />
                Reply
              </button>
            )}
          </div>

          {replyingTo === comment.id && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <form className="space-y-3">
                <Textarea
                  placeholder="Write your reply..."
                  className="min-h-20"
                />
                <div className="flex gap-2">
                  <Button size="sm">Post Reply</Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setReplyingTo(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {comment.replies &&
            comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply={true} />
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Comments ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Comment form */}
          <form onSubmit={handleSubmitComment} className="space-y-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newComment.email}
                  onChange={(e) =>
                    setNewComment({ ...newComment, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comment">Comment *</Label>
              <Textarea
                id="comment"
                placeholder="Share your thoughts..."
                className="min-h-24"
                value={newComment.content}
                onChange={(e) =>
                  setNewComment({ ...newComment, content: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>

          {/* Comments list */}
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
