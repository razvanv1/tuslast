CREATE TABLE public.ai_score_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  score INTEGER NOT NULL,
  rank TEXT NOT NULL,
  category_scores JSONB NOT NULL,
  weakest_category TEXT NOT NULL,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_score_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an AI score result"
ON public.ai_score_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) <= 255
  AND length(email) >= 3
  AND score >= 0
  AND score <= 100
);

CREATE INDEX idx_ai_score_submissions_created_at ON public.ai_score_submissions(created_at DESC);
CREATE INDEX idx_ai_score_submissions_email ON public.ai_score_submissions(email);