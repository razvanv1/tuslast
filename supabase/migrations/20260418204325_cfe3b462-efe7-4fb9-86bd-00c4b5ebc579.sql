CREATE POLICY "Deny all client reads on ai_score_submissions"
ON public.ai_score_submissions
FOR SELECT
TO anon, authenticated
USING (false);